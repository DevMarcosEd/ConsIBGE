import produce from "immer";

export default function cities(state = [], action) {
    switch(action.type) {
        case 'SHOW_CITY_DATA_SUCCESS':
            state = []
            return produce(state, draft => {

                draft.push(action.data)

            })
    default:
        return state;
    }

}