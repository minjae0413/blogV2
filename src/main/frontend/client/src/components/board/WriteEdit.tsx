import React, {useState, useRef} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";



const WriteEdit = () =>{
    const  [ value ,  setValue ]  =  useState ({
        name:"",
        title:"",
        content:"",
    }) ;

    const handleChangeBoard =(e:any)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value,
        })
    }
    const handleChangeContent =(e:any)=>{
        setValue({
            ...value,
            content:e,
        })
    }

    const handleBoardSubmit = () =>{
        if(value.title.length < 1){
            alert("제목을 입력해주세요.")
            return;
        }
        
        if(value.content.length === 0){
            alert("내용을 입력해주세요.")
            return;
        }

        alert("저장 완료")
    }

    return (
        <>
            <label htmlFor="">제목 : </label><input type="text" name="title" value={value.title} onChange={handleChangeBoard}/>
            <ReactQuill theme="snow" value={value.content} onChange={handleChangeContent}/>
            <button onClick={handleBoardSubmit}>저장하기</button>
        </>
    );
}


export default WriteEdit;