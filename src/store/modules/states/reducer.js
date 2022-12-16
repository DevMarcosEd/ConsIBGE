import produce from "immer";

export default function cities(state = [], action) {
    switch(action.type) {
        case 'SHOW_CITIES_SUCCESS':
            state = []
            return produce(state, draft => {
                
                draft.push(action.cities)

            })
    default:
        return state;
    }

}