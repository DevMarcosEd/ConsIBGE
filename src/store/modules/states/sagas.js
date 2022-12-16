import { put, call, all, takeLatest } from "redux-saga/effects"

import api from '../../../services/api';
import { showCitiesSuccess } from './actions' //showCityDataSuccess

function* showCities({sigla}) {
    
    const cities = yield call(api.get, `estados/${sigla}/municipios`);

    const response = cities.data

    yield put(showCitiesSuccess(response))
}

export default all([
    takeLatest('SHOW_CITIES_REQUEST', showCities),
])