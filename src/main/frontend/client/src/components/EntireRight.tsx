import { Route, Routes, Link, useNavigate} from "react-router-dom";
import Main from "./main/Main";
import Join from "../join/Join";
import Login from "../join/Login";
import Mypage from "./Mypage";
import Testapi from "../testapi/Testapi";
import FindID from "../join/FindID";
import FindPW from "../join/FindPW";
import Main_Header from "./Main_Header";
import Footer from "./Footer"
import BoardEditor from "./board/BoardEditor";
import WeatherMain from "./weather/WeatherMain";
import CalorieMain from "./calorie/CalorieMain";
import Calendar from "./calendar/Calendar";


import mainLogo from "../img/logo.png";

const Entire_right = () =>{

    return(
        <div className='entire_right'>
        <Routes>
            <Route path="/" element={
              <>
                <Main_Header/>
                <Main/>
                <Footer/>
              </>
              } />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/findID" element={<FindID />} />
            <Route path="/findPW" element={<FindPW />} />
            <Route path="/testapi" element={<Testapi />} />
            <Route path="/writeForm" element={
              <>
                <Main_Header/>
                <BoardEditor />
                <Footer/>
              </>
            } />
            <Route path="/Weather" element={
              <>
                <Main_Header/>
                <WeatherMain/>
                <Footer/>
              </>
            } />
            <Route path="/Calorie" element={
              <>
                <Main_Header/>
                <CalorieMain/>
                <Footer/>
              </>
            } />
            <Route path="/Calendar" element={
              <>
                <Main_Header/>
                <Calendar/>
                <Footer/>
              </>
            } />
        </Routes>
      </div>
    )
}

export default Entire_right;