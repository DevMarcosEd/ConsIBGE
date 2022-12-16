import { combineReducers } from "redux";

import states from './states/reducer';
import dataCity from "./dataCity/reducer";

export default combineReducers({
    states,
    dataCity
})