import {useState,useEffect} from "react";
import axios from "axios";

interface Types {
    ANIMAL_PLANT: string,
    BGN_YEAR: string,
    DESC_KOR: string,
    NUTR_CONT1: string,
    NUTR_CONT2: string,
    NUTR_CONT3: string,
    NUTR_CONT4: string,
    NUTR_CONT5: string,
    NUTR_CONT6: string,
    NUTR_CONT7: string,
    NUTR_CONT8: string,
    NUTR_CONT9: string,
    SERVING_WT: string,
}

const CalorieEdit = () =>{
    const apiKey= process.env.REACT_APP_CALORIE_KEY; // remove this after you've confirmed it is working
  
    const [foodInfo, setFood] = useState({
        food:"",
    });
    const [options, setOptions] = useState("");
    
    // 음식 정보
    function todayFood(){
        let foodOption:string = "";
        
        axios.get(`https://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?serviceKey=${apiKey}&desc_kor=${foodInfo.food}&pageNo=1&type=json`,{
        })
        .then( (header) => {
            const jsonData = header.data;
            let returnval = jsonData['body']['items'];
            console.log("   before returnval:", returnval)
            returnval = returnval.filter((el:Types, idx:number) => {
                if(idx >= 1 ){
                    if(el['DESC_KOR'] == returnval[idx-1]['DESC_KOR']){
    
                        console.log("    returnval[idx-1]:", returnval[idx-1])
                        return (parseInt(el['BGN_YEAR']) > parseInt(returnval[idx-1]['BGN_YEAR'])) ? el : returnval[idx-1];
                    }
                }
            })
            console.log("    returnval:", returnval)
            // returnval.forEach((el:Types, idx:number) => {
            //     console.log("    returnval:", returnval[idx]['DESC_KOR'], returnval[idx]['BGN_YEAR'])
            //     if(idx >= 1 && el['DESC_KOR'] != returnval[idx-1]['DESC_KOR']){
            //         foodOption += `<option value=${returnval[idx-1]['NUTR_CONT1']} data-txt=${returnval[idx-1]['SERVING_WT']}>${returnval[idx-1]['DESC_KOR']}${returnval[idx-1]['BGN_YEAR']}</option>`
            //     }
            // });
            // setOptions(foodOption)
        })
         .catch( (error) => {
            console.log(error);
        })
    }

    // 음식명 입력
    const todayFoodState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFood({
            ...foodInfo,
            [e.target.name] : e.target.value,
        })
    }
    
    // 검색
    const todayFoodSubmit = () => {
        todayFood()
    }

    // 
    const foodInfohandle = () => {
      
    }

    return (
        <article>
            <ul>
                <li>
                    <label htmlFor="">오늘 먹은 음식 : </label>
                    <input type="text" name="food" value={foodInfo.food}  onChange={todayFoodState}/>
                    <button onClick={todayFoodSubmit}>입력</button>
                </li>
            </ul>
            
            <div>
                <select name="" id="FoodList" dangerouslySetInnerHTML={{ __html: options }} onChange={foodInfohandle}>
                </select>
            </div>
        </article>
    );
}

export default CalorieEdit;