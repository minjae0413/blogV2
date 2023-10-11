// 날씨 api 연결
import axios from "axios"

const WeatherMain = () => {
   const componentDidMount =()=> {
        const cityName = 'Incheon';
        const apiKey = process.env.REACT_APP_WEATHER_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    
        //위에서 만든 상태 변수에 값을 전달
        axios
          .get(url)
          .then((responseData) => {
            console.log(responseData);
            const data = responseData.data;
            data.setState({
              temp: data.main.temp,
              temp_max: data.main.temp_max,
              temp_min: data.main.temp_min,
              humidity: data.main.humidity,
              desc: data.weather[0].description,
              icon: data.weather[0].icon,
              loading: false,
            });
          })
          .catch((error) => console.log(error));
      }
    return (
        <article>

            
        </article>
    );
}

export default WeatherMain;