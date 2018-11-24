const initialState = { results: null }

export default function newResults(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case "DATA_UPDATE":
            nextState = {
                ...state,
                results: action.value
            }
            return nextState || state;
            break;
        case "REMOVE_DATA":
            nextState = {
                ...state,
                results: null
            }
            return nextState || state;
            break;
        default:
            return state;
    }
}