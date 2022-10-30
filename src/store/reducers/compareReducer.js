const INITIAL_STATE = {
    compare:[]
}

export default function compareReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "SET_Compare":
            state.compare.push(action.payload)
            return {
                ...state,
            }
        case "SET_COMPARECASE":
            state.compare = new Array (...action.payload)
            return{
                ...state,
            }
        default:
            return state;
    }
}

