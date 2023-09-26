import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const Content = () =>{
    return (
        <div className="Content">
            <div className="MyInfo">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    height={200}
                >
                    <SwiperSlide className='b_blue'>
                        <Link>
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
                    <SwiperSlide className="b_blue2">
                        <Link>
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
                    <SwiperSlide><span>#퇴사</span></SwiperSlide>
                    <SwiperSlide><span>#일하기싫어</span></SwiperSlide>
                    <SwiperSlide><span>#퇴근</span></SwiperSlide>
                    <SwiperSlide><span>#퇴사</span></SwiperSlide>
                    <SwiperSlide><span>#일하기싫어</span></SwiperSlide>
                    <SwiperSlide><span>#퇴근</span></SwiperSlide>
                    <SwiperSlide><span>#퇴사</span></SwiperSlide>
                    <SwiperSlide><span>#일하기싫어</span></SwiperSlide>
                    <SwiperSlide><span>#퇴근</span></SwiperSlide>
                    <SwiperSlide><span>#퇴사</span></SwiperSlide>
                    <SwiperSlide><span>#일하기싫어</span></SwiperSlide>
                    <SwiperSlide><span>#퇴근</span></SwiperSlide>
                    <SwiperSlide><span>#퇴사</span></SwiperSlide>
                    <SwiperSlide><span>#일하기싫어</span></SwiperSlide>
                </Swiper>
            </div>
            <div className="BestBlog">
                <Swiper
                    className="slide-Blog"
                    spaceBetween={20}
                    slidesPerView={'auto'}
                    freeMode={true}
                    modules={[FreeMode]}
                >
                    <SwiperSlide>
                        <Link>
                            <div className="thumbnail">
                                <img src="" alt="" />
                            </div>
                            <dl>
                                <dt>타이틀</dt>
                                <dd>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</dd>
                            </dl>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <div className="thumbnail">
                                <img src="" alt="" />
                            </div>
                            <dl>
                                <dt>타이틀</dt>
                                <dd>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</dd>
                            </dl>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <div className="thumbnail">
                                <img src="" alt="" />
                            </div>
                            <dl>
                                <dt>타이틀</dt>
                                <dd>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</dd>
                            </dl>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link>
                            <div className="thumbnail">
                                <img src="" alt="" />
                            </div>
                            <dl>
                                <dt>타이틀</dt>
                                <dd>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</dd>
                            </dl>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="live-Best">
                <h3>실시간 인기 로그</h3>
                <div className="live-list">
                    <div className='f-between b_blue3'>
                        <div className='list-con'>
                            <p className='list-tit'>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </p>
                            <div className='f-box'>
                                <span>글쓴이</span>
                                <span>0000.00.00</span>
                            </div>
                        </div>
                        <div class="bookMark">
                            <input type="checkbox" id="book-mark1"/><label htmlFor="book-mark1"></label>
                        </div>
                    </div>
                    <div className='f-between b_beige'>
                        <div className='list-con'>
                            <p className='list-tit'>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </p>
                            <div className='f-box'>
                                <span>글쓴이</span>
                                <span>0000.00.00</span>
                            </div>
                        </div>
                        <div class="bookMark">
                            <input type="checkbox" id="book-mark1"/><label htmlFor="book-mark1"></label>
                        </div>
                    </div>
                    <div className='f-between b_pink'>
                        <div className='list-con'>
                            <p className='list-tit'>내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 </p>
                            <div className='f-box'>
                                <span>글쓴이</span>
                                <span>0000.00.00</span>
                            </div>
                        </div>
                        <div class="bookMark">
                            <input type="checkbox" id="book-mark1"/><label htmlFor="book-mark1"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;