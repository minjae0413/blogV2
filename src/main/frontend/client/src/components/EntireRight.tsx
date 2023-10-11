import { Route, Routes, Link} from "react-router-dom";
import Main from "./main/Main";
import Join from "../join/join";
import Login from "../join/login";
import Mypage from "./Mypage";
import Testapi from "../testapi/Testapi";
import FindID from "../join/findID";
import FindPW from "../join/findPW";
import Main_Header from "./Main_Header";
import Footer from "./Footer"
import BoardEditor from "./board/BoardEditor";
import WeatherMain from "./weather/WeatherMain";
import mainLogo from ".,/img/logo.png";
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
        </Routes>
      </div>
    )
}

export default Entire_right;