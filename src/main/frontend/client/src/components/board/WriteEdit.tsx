import React, {useState, useRef} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const WriteEdit = () =>{
    let time={
        year: new Date().getFullYear(),
        month: String(new Date().getMonth()+1).padStart(2,'0'),
        date: String(new Date().getDate()).padStart(2,'0'),
        hours: String(new Date().getHours()).padStart(2,'0'),
        minutes: String(new Date().getMinutes()).padStart(2,'0'),
        seconds: String(new Date().getSeconds()).padStart(2,'0'),
    }

    let now = `${time.year}.${time.month}.${time.date} ${time.hours}:${time.minutes}:${time.seconds}`;

    const  [ value ,  setValue ]  =  useState ({
        name:"",
        title:"",
        content:"",
        id : now,
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
    const modules = {
        toolbar: {
            container: [
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'size': ['9px','10px','11px','12px','14px','16px','18px','20px','22px','24px','26px','28px']}],
              [{ 'align': [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
              [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
              ['image', 'video'],
              ['clean']  
            ],
        }
    }
    return (
        <article className="Wrap">
            <label className="Title" htmlFor=""><input type="text" name="title" value={value.title} onChange={handleChangeBoard} placeholder="제목을 입력해주세요."/></label>
            <ReactQuill
                value={value.content}
                theme="snow"
                onChange={handleChangeContent}
                placeholder={"내용을 입력해주세요."}
                modules={modules}
            />
            <button onClick={handleBoardSubmit}>저장하기</button>
        </article>
    );
}


export default WriteEdit;