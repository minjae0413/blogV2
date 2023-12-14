import React from "react";
import { Link } from "react-router-dom";


function Story(props){
    return(
        <Link>
            <div className="thumbnail">
                <img src={props.url} alt="" />
            </div>
            <dl>
                <dt>{props.title}</dt>
                <dd>{props.contents}</dd>
            </dl>
        </Link>
    )
}

export default Story;