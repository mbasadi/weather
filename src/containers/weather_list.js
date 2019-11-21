import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {fetchWeather} from '../actions/index'
// import {bindActionCreators} from 'redux'
class WeatherList extends Component{
  // constructor(props){
  //    super(props)
  //   // this.state={term:''};
  //   // this.onInputChange=this.onInputChange.bind(this);
  // }
  renderWeather(cityData){
    return(
      <tr>
      <td> {cityData.city.name} </td>
      </tr>
    );
  }
  render(){
    // console.log(this.props.weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City</th>
            <th> Themprture</th>
            <th> Pressure</th>
            <th> Humidity</th>
              {this.props.weather.map(this.renderWeather)}
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    )
  }
}
 function mapStateToProps ({weather}) {
   return {weather};

 }
// function mapDispatchToProps(dispatch){
//   return bindActionCreators ({fetchWeather:fetchWeather},dispatch)
// }
export default connect (mapStateToProps)(WeatherList);
