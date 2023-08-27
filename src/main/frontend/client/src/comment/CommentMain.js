import './layout.css';
import CommentEditor from './CommentEditor';
import CommentList from './CommentList';
import { useRef, useState } from 'react';

function CommentMain() {
  const [data,setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id : dataId.current,
    };
    dataId.current += 1;
    setData([newItem,...data])//원래 데이터
  };

  const onRemove = (targetId) =>{
    const newCommentList = data.filter((it)=> it.id !== targetId)//배열 제외삭제
    setData(newCommentList);
  }

  const onEdit = (targetId,newContent) =>{
    setData(
      data.map((it) => it.id === targetId ? {...it, content:newContent} : it)
    )
  };


  return (
    <div className="App">
      <div className='MainWrap'>
        <CommentEditor onCreate={onCreate}/>
        <CommentList onEdit={onEdit} onRemove={onRemove} commentList={data}/>
      </div>
    </div>
  );
}

CommentList.defaultProps ={
  commentList:[],
}

export default CommentMain;
