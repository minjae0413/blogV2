import {useState,useEffect} from "react";
import axios from "axios";

const CalorieMain = () =>{
    const apiKey= process.env.REACT_APP_CALORIE_KEY; // remove this after you've confirmed it is working
  
    const [foodInfo, setFood] = useState({
        food:"",
        kcal:0,
    });

    function todayFood(){
        axios.get(`https://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?serviceKey=${apiKey}&desc_kor=${foodInfo.food}&pageNo=1&numOfRows=3&type=json`,{
        })
        .then( (header) => {
            const jsonData = header.data;
            const returnval = jsonData['body']['items'];
            const selectOption = "";
            returnval.forEach((el:any,idx:Number)=> {
                
            });
          
        })
         .catch( (error) => {
            console.log(error);
        })
        
    }
 

    const todayFoodState = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFood({
            ...foodInfo,
            [e.target.name] : e.target.value,
        })
    }
    
    const todayFoodSubmit = () => {
        todayFood()
    }

    return (
        <article>
            <ul>
                <li>
                    <label htmlFor="">오늘 먹은 음식 : </label>
                    <input type="text" value={foodInfo.food} name="food" onChange={todayFoodState}/>
                    <button onClick={todayFoodSubmit}>입력</button>
                </li>
            </ul>
            
            <div>
                <select name="" id="FoodList">
                    
                </select>
            </div>
        </article>
    );
}

export default CalorieMain;