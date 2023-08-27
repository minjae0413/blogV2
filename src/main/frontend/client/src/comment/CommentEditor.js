import {useRef, useState } from "react";

const CommentEditor = ({onCreate}) =>{

    const contentInput = useRef();

    const [state, setState] = useState({
        content:"",
        emotion:1,
    });

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit =()=>{
        if(state.content.length < 5){
            contentInput.current.focus();
            return;
        }
        
        onCreate(state.author,state.content,state.emotion);// 입력 정보 
        alert("저장 성공")
        setState({ //입력 창 초기화
            content:"",
            emotion:1,
        })
    }

    return (
        <div className="CommentEditor">
            <div>
                <textarea ref={contentInput} name="content" value={state.content} onChange={handleChangeState}/>
            </div>
            <div className="TextRight">
                <button onClick={handleSubmit}>저장</button>
            </div>
        </div>
    );
}

export default CommentEditor;