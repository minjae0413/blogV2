import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as FaHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Story from "../story/Story";
import UploadStory from '../story/UploadStory'
import YourStoryLink from '../story/YourStoryLink'; 

import 'swiper/css';
import 'swiper/css/free-mode';

const Content = () =>{

    const [heartStatus, setHeartStatus] = useState([false, false, false]);

    const handleBookmark = (index) => {
        const newHeartStatus = [...heartStatus];
        newHeartStatus[index] = !newHeartStatus[index];
        setHeartStatus(newHeartStatus);
    };

    const renderLiveItem = (index, color) => {
        return (
        <div className={`f-between b_${color}`} key={index}>
            <div className="list-con">
            <p className="list-tit">내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </p>
            <div className="f-box">
                <span>글쓴이</span>
                <span>0000.00.00</span>
            </div>
            </div>
            <div className="bookMark">
            <span className="heart" onClick={() => handleBookmark(index)}>
                {heartStatus[index] ? (
                <FontAwesomeIcon className="heartLike" size="lg" icon={faHeart} />
                ) : (
                <FontAwesomeIcon className="heartLike" size="lg" icon={FaHeartRegular} />
                )}
            </span>
            </div>
        </div>
        );
    };

    return (
        
        <div className="Content">
            <div className="MyInfo">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    height={200}
                >
                    <SwiperSlide className="b_blue2">
                        <Link to={'/Weather'}>
                            <div className="slide-left">
                                <div className="slide-tit">
                                    현재 날씨는?<br/>
                                    <span>서브텍스트 보인다~~</span>
                                </div>
                                <div className="slide-info">
                                    <strong>17℃</strong>
                                    <span className="t2">비가 오고 있습니다 &#40;13:00 기준&#41;</span>
                                </div>
                            </div>
                            <div className="slide-right"></div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='b_blue'>
                        <Link to={'/Calorie'}>
                            <div className="slide-left">
                                <div className="slide-tit">
                                    오늘 섭취 칼로리<br/>
                                    <span>서브텍스트 보인다~~</span>
                                </div>
                                <div className="slide-info">
                                    <strong>2000</strong>
                                    <span>kcal</span>
                                </div>
                            </div>
                            <div className="slide-right"></div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className='b_red'>
                        <Link className="t2">
                            <div className="slide-left">
                                <div className="slide-tit">
                                    오늘 운동, 얼마큼?<br/>
                                    <span>서브텍스트 보인다~~</span>
                                </div>
                                <div className="slide-info">
                                    <div className="time-info">
                                        <div>
                                            <p>운동 1</p>
                                            <strong>30</strong>
                                            <span className="t3">분</span>
                                        </div>
                                        <div>
                                            <p>운동 2</p>
                                            <strong>15</strong>
                                            <span className="t3">분</span>
                                        </div>
                                        <div>
                                            <p>운동 3</p>
                                            <strong>70</strong>
                                            <span className="t3">분</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
            
            <div className="filterWrap">
                <h3>나의 관심 로그 찾아보기</h3>
                <Swiper
                    className="hashTag"
                    spaceBetween={10}
                    slidesPerView={'auto'}
                    freeMode={true}
                    modules={[FreeMode]}
                >
                    <SwiperSlide><span>#퇴근</span></SwiperSlide>
                    <SwiperSlide><span>#아자아자빠이팅</span></SwiperSlide>
                    <SwiperSlide><span>#LG정규시즌우승</span></SwiperSlide>
                    <SwiperSlide><span>#29년의기다림</span></SwiperSlide>
                    <SwiperSlide><span>#우승시계</span></SwiperSlide>
                    <SwiperSlide><span>#엘지아자아자빠이팅</span></SwiperSlide>
                    <SwiperSlide><span>#무적엘지</span></SwiperSlide>
                    <SwiperSlide><span>#개발2팀빠이팅</span></SwiperSlide>
                    <SwiperSlide><span>#리액트빠이팅</span></SwiperSlide>
                    <SwiperSlide><span>#출근</span></SwiperSlide>
                    <SwiperSlide><span>#엘지가우승했지롱~~~~</span></SwiperSlide>
                    <SwiperSlide><span>#29년만에우승했다~~</span></SwiperSlide>
                </Swiper>
            </div>
            <div className="BestBlog ov">
                <Swiper
                    className="slide-Blog"
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    freeMode={true}
                    modules={[FreeMode]}
                >
                    <SwiperSlide>
                        <div>
                            <YourStoryLink />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <Story
                       url='https://item.kakaocdn.net/do/58119590d6204ebd70e97763ca933baf9f5287469802eca457586a25a096fd31'
                       title='헤어나올 수가 없네'
                       contents='#잔망루피#귀엽다'
                       > 
                       </Story>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Story
                       url='https://cdn.imweb.me/upload/S20210809c06cc49e8b65a/e8736944f1dc5.png'
                       title='귀여운 나'
                       contents='#귀여운나 #뎬댱 #나 #이미지포지션어케'
                       > 
                       </Story>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Story
                       url='https://cdn.imweb.me/thumbnail/20220504/b3cfa3b5bc931.jpg'
                       title='다들 용서 안해요 얼른 해라 ~!'
                       contents='#블로그 #빨리해라 #조민재 #황승아 #서종주 #위건 #이은경'
                       > 
                       </Story>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="live-Best">
                <h3>실시간 인기 로그</h3>
                <div className="live-list">
                    {renderLiveItem(0, "blue3")}
                    {renderLiveItem(1, "beige")}
                    {renderLiveItem(2, "pink")}
                </div>
            </div>
        </div>
    );
}

export default Content;