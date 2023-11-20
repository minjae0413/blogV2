import "../../scss/calendar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

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
      <div className="calendar_entire">
        <div className="f-left cal_top_wrap">
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

      <div className="state_wrap">
        <div className="tit">
          <Link to={"/mypage"} className="userName">홍길동님,</Link>
          <p>
              오늘 상태를 로그하세요!
          </p>
        </div>

          <Swiper
            className="state_sli"
            modules={[FreeMode]}
            spaceBetween={20}
            slidesPerView={3}
          >
            <SwiperSlide>
              <div className="titile">
                <p>오늘 섭취 칼로리</p>
              </div>
              <div className="content">
                <p className="kcal bold">1250</p>
                <p>Kcal</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="titile">
                <p>오늘 운동로그</p>
              </div>
              <div className="content">
                <div className="flex-box">
                  <p>산책</p>
                  <p className="min">10</p>
                  <p>분</p>
                </div>
                <div className="flex-box">
                  <p>수영</p>
                  <p className="min">20</p>
                  <p>분</p></div>            
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="titile">
                <p>오늘 날씨로그</p>
              </div>
              <div className="content">
                <p className="tem">17°/25°</p>
                <p>미세먼지 보통</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="titile">
                <p>오늘의 플로그인</p>
              </div>
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Calendar;
