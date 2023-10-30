import "../../scss/calendar.scss";
import React, {useState, useEffect} from "react";
import { faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
const Calendar = () =>{
    const [getMoment, setMoment] = useState(moment());
    const today = getMoment;
    today.format("YY/MM/DD")
    const firstWeek = today.clone().startOf('month').week();
    const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
    const weekArray=()=>{

        let result:any[] = [];
        let week = firstWeek;
        for ( week; week <= lastWeek; week++) {
          result = result.concat(
            <tr key={week}>
              {
                Array(7).fill(0).map((data, index) => {
                  let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day'); //d로해도되지만 직관성
  
                  if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                    return(
                        <td key={index} style={{color:'blue'}} >
                          <span>{days.format('DD')}</span>
                        </td>
                    );
                  }else{
                    return(
                        <td key={index}>
                          <span>{days.format('DD')}</span>
                        </td>
                    );
                  }
                })
              }
            </tr>
          );
        }
        return result;
      }
  
    const dayWeek:string[] =['월','화','수','목','금','토','일'];
    return(
        <div className="MainWrap">
            <div className="f-center">
                <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }}><FontAwesomeIcon icon={faAngleLeft} /></button>
                <p><span>{today.format('YYYY')}</span>{today.format('MM')}</p>
                <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }}><FontAwesomeIcon icon={faAngleRight} /></button>
            </div>
            <table className="Calendar_wrap">
                <thead>
                    {
                        dayWeek.map((week, i)=>{
                            return(
                                <td key={i}>{week}</td>
                            )
                        })
                    }
                </thead>
                <tbody>
                    {weekArray()}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;