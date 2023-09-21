import './Main.css';
import Main_Header from "./Main_Header.js";
import Content from "./Content.js";

function Main() {
    return (
        <div className="MainWrap">
            <Main_Header/>
            <Content/>
        </div>
    );
}

export default Main;
