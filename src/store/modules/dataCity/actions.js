export function showCityDataRequest(id) {
    return {
        type: 'SHOW_CITY_DATA_REQUEST',
        id
    }
}

export function showCityDataSuccess(data) {
    return {
        type: 'SHOW_CITY_DATA_SUCCESS',
        data
    }
}