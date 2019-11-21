import React,{Component} from 'react';
import { connect } from 'react-redux'
import {fetchWeather} from '../actions/index'
import {bindActionCreators} from 'redux'
 class SearchBar extends Component {
  constructor(props){
    super(props)
    this.state={term:''};
     this.onInputChange=this.onInputChange.bind(this);
      this.onFormSubmit=this.onFormSubmit.bind(this);
  }
  onInputChange(event){
      // console.log(event.target.value);
    this.setState({term:event.target.value})
  }
  onFormSubmit(event){
    event.preventDefault();
      // console.log(this.state.term);
      this.props.fetchWeather(this.state.term)
  }
  render () {
    return(
    <form onSubmit={this.onFormSubmit}className="input-group">
      <input
      placeholder="get a five-day forcast in your favorite cities"
      className="from-control"
      value={this.state.term}
      onChange={this.onInputChange}
      />
        <span className='input-group-btn'>
          <button type="submit" className="btn btn-secondary"> submit</button>
        </span>
    </form>
  )

  }
}
function mapStateToProps (state) {
  return {
     weather:state.weather
    // asdf:'123'
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators ({fetchWeather:fetchWeather},dispatch)
}
export default connect (mapStateToProps,mapDispatchToProps)(SearchBar);
