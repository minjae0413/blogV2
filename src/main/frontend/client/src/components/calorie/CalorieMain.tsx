import {useState,useEffect} from "react";
import axios from "axios";
import CalorieEdit from "./CalorieEdit"

const CalorieMain = () =>{

    const onCreate = (food:string,kcal:number) =>{
        const newItem = {
            food,
            kcal,
        }
    }
    

    return (
        <article>
            <CalorieEdit/>
        </article>
    );
}

export default CalorieMain;