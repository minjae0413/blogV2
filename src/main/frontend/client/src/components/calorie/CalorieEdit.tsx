import {useState,useEffect} from "react";
import axios from "axios";

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
            const returnval = jsonData['body']['items'];
            returnval.forEach((el:string, idx:number) => {
                foodOption += `<option value=${returnval[idx]['NUTR_CONT1']}>${returnval[idx]['DESC_KOR']}</option>`
            });
            setOptions(foodOption)
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
    const foodInfohandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFood({
            ...foodInfo,
            [e.target.name] : e.target.value,
        })
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
                <select name="" id="FoodList" dangerouslySetInnerHTML={{ __html: options }}>
                </select>
            </div>
        </article>
    );
}

export default CalorieEdit;