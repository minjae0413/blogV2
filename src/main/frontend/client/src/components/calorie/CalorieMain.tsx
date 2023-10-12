import {useState,useEffect} from "react";
import axios from "axios";

const CalorieMain = () =>{
  
    const apiKey= process.env.REACT_APP_CALORIE_KEY; // remove this after you've confirmed it is working
    const [code, setCode] = useState('');
    const [msg, setMsg] = useState('');
    useEffect( () => {
        axios.get(`https://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1?serviceKey=LuzMRse%2BHSLpVAku6AHXRloynZXPkYnXBtQ295lZXRdwo5y%2FSJCRsQ7GErzxJTcTFUMMJRrFMOWPjyu7dcF0JQ%3D%3D&desc_kor=%EB%B0%94%EB%82%98%EB%82%98%EC%B9%A9&pageNo=1&numOfRows=3&bgn_year=2017&animal_plant=(%EC%9C%A0)%EB%8F%8C%EC%BD%94%EB%A6%AC%EC%95%84&type=XML`,{
        // axios.get(`https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=LuzMRse%2BHSLpVAku6AHXRloynZXPkYnXBtQ295lZXRdwo5y%2FSJCRsQ7GErzxJTcTFUMMJRrFMOWPjyu7dcF0JQ%3D%3D&numOfRows=10&pageNo=1&base_date=20231004&dataType=JSON&base_time=0600&nx=55&ny=127`,{
        })
        .then( (header) => {
            const jsonData = header.data;
            const returnval = jsonData['header'];
            setCode(returnval['resultCode']);
            setMsg(returnval['resultMsg']);
        })
        .catch( (error) => {
            console.log(error);
        })
    }, []);

    return (
        <article>
            <p>{code}</p>
            <p>{msg}</p>
        </article>
    );
}

export default CalorieMain;