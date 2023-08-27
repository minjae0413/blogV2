import {useRef, useState} from "react"


const UnmountText = () =>{
    return <textarea></textarea>
}

const CommentItem =({
        onEdit,
        onRemove,
        author,
        content,
        create_date,
        emotion,
        id
    }) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit)

    //댓글
    const [isReply,setIsReply] = useState(false);
    const toggle = () => setIsReply(!isReply)

    const [localContent,setLocalContent] = useState(content);
    const localContentInput = useRef(); //포커스

    const handleRemove = () => {
        if(window.confirm(`글를 정말 삭제하시겠습니까?`)){
            onRemove(id)
        }
    }

    const handleQuitEdit = () =>{
        setIsEdit(false)
        setLocalContent(content) //취소시 원래 컨턴츠로 변경
    }

    const handleEdit = () =>{
        if(localContent.length < 5){
            localContentInput.current.focus();
            return;
        }

        if(window.confirm(`수정하시겠습니다?`)){
            onEdit(id, localContent)
            toggleIsEdit();
        }
    }
    
    return (
        <div className="CommentItem">
            <div className="info">
                <span>작성자 : {author}</span> |  
                <span className="date">
                    {new Date(create_date).toLocaleString()}
                </span>
            </div>
            <div className="content">
                {isEdit ? <><textarea ref={localContentInput} value={localContent} onChange={(e) => setLocalContent(e.target.value)}/></> : <>{content}</> }<br/>
            </div>
            
            {!isEdit && isReply ? <> 
                <div className="reply">
                    <UnmountText/>
                    <button>저장</button>
                </div>  
            </> : <></>}
                
            {!isEdit ? <>
                <button onClick={toggle}>댓글</button>
            </> : <></>}

            {isEdit ? <>
                <button onClick={handleEdit}>
                수정완료
                </button>
                <button onClick={handleQuitEdit}>
                취소
                </button>
            </> : <>
                <button onClick={toggleIsEdit}>
                수정하기
                </button>
                <button onClick={handleRemove}>
                삭제하기
                </button>
            </>}
        </div>
    )
}

export default CommentItem;