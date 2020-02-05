import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import getDataReducer from './reducers/GetDataReducer/GetDataReducer';

const reducers = combineReducers({
  getDataReducer: getDataReducer,
  router: routerReducer,
});

export default reducers;