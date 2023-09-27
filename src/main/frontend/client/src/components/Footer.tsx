import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faCalendar, faNoteSticky, faBars } from "@fortawesome/free-solid-svg-icons";

const Footer:any= () =>{
return(
        <div className="footer">
            <ul className="footerWrap">
                <li><FontAwesomeIcon icon={faBowlFood} /><p className="ir">잇로그</p></li>
                <li><FontAwesomeIcon icon={faCalendar} /><p className="ir">캘린더</p></li>
                <li><FontAwesomeIcon icon={faNoteSticky} /><p className="ir">글쓰기</p></li>
                <li><FontAwesomeIcon icon={faBars} /><p className="ir">메뉴</p></li>
            </ul>
        </div>
    )
}

export default Footer;
