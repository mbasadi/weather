
import axios from 'axios';
const API_KEY='b055e2e9d30b491fd6bee67e4553a785';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';
export function fetchWeather(city){
  const url=`${ROOT_URL}&q=${city},us`;

  const request =axios.get(url);


   return (dispatch)=>{
     request.then(({data})=>{
dispatch({
       type:FETCH_WEATHER,
       payload:data}
    )} )
   };
   }
