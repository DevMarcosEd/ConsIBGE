export function showCitiesRequest(sigla) {
    return {
        type: 'SHOW_CITIES_REQUEST',
        sigla
    }
}

export function showCitiesSuccess(cities) {
    return {
        type: 'SHOW_CITIES_SUCCESS',
        cities
    }
}