import React, {useRef} from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";



const WriteEdit = () =>{

    return (
        <>
            <label htmlFor="">제목 : </label><input type="text" />
           <ReactQuill theme="snow" />
        </>
    );
}


export default WriteEdit;