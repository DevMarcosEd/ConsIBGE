import { all } from "redux-saga/effects";

import states from "./states/sagas";
import dataCity from "./dataCity/sagas";

export default function* rootSaga() {
    return yield all([
        states,
        dataCity
    ])
}