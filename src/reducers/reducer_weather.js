import {FETCH_WEATHER} from '../actions/index'
export default function (state=[],action){
  switch (action.type) {
    case FETCH_WEATHER:
    console.log(data)
      // return state.concat([action.payload.data]);
      // console.log(action.payload);
      return [action.payload.data,...state];
  }
  return state
}
