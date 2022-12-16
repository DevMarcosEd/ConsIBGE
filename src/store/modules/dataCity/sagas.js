import { put, call, all, takeLatest } from "redux-saga/effects"

import api from '../../../services/api';
import { showCityDataSuccess } from './actions'

function* showCityData({id}) {
    
    const city = yield call(api.get, `municipios/${id}`)

    const response = city.data

    const dataCity = {
        id: response.id,
        microrregiao: response.microrregiao.nome,
        mesorregiao: response.microrregiao.mesorregiao.nome,
        uf: response.microrregiao.mesorregiao.UF.sigla,
        regiao: response.microrregiao.mesorregiao.UF.regiao.nome
    }

    yield put(showCityDataSuccess(dataCity))
}

export default all([
    takeLatest('SHOW_CITY_DATA_REQUEST', showCityData)
])