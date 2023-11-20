import "../../scss/calendar.scss";
import React, { useState } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;
  today.format("YY/MM/DD");
  const firstWeek = today.clone().startOf('month').week()-1;
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  const weekArray = () => {
    let result: any[] = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
        {Array(7)
          .fill(0)
          .map((data, index) => {
            let days = today
              .clone()
              .startOf('month')
              .week(week)
              .startOf('week')
              .add(index, 'day');

            if (days.month() === today.month()) {
              return (
                <td key={index}>
                  <span>{days.format('DD')}</span>
                </td>
              );
            } else {
              return <td key={index}></td>;
            }
          })}
      </tr>
      );
    }
    return result;
  };

  const dayWeek: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className="MainWrap">
      <div className="f-left">
        <button onClick={() => { setMoment(getMoment.clone().subtract(1, 'month')) }}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <p className="cal_top">
          {today.format('MMM')}
          <span>{today.format('YYYY')}</span>
        </p>
        <button onClick={() => { setMoment(getMoment.clone().add(1, 'month')) }}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <table className="Calendar_wrap">
        <thead>
          <tr>
            {dayWeek.map((week, i) => {
              return <td key={i} className="blue">{week}</td>;
            })}
          </tr>
        </thead>
        <tbody>{weekArray()}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
