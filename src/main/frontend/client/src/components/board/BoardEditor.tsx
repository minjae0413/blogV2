import WriteEdit from "./WriteEdit";
import { useRef, useState } from 'react';
import "../../scss/Board.scss";

const BoardEditor = () =>{
    const [data,setData] = useState<any[]>([]);
    const dataId = useRef(0);
    const onCreate = (name:any, title:any, content:any) => {
        const create_date = new Date().getTime();
        const newItem = {
            name,
            title,
            content,
            create_date,
            id : dataId.current,
        };
        dataId.current += 1;
        setData([newItem,...data])
      };

    return (
        <>
            <WriteEdit/>
        </>
    )
}

export default BoardEditor;