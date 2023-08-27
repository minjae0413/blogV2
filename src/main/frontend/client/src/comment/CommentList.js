import CommentItem from "./CommentItem";

const CommentList =({onEdit,onRemove,commentList}) => {
    return (
        <div className="CommentList">
            <h4>{commentList.length}개의 댓글이 있습니다.</h4>
            <div>
                {commentList.map((it)=> (
                    <CommentItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove}/>
                ))}
            </div>
        </div>
    )
}

export default CommentList;