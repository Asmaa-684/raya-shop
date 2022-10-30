const INITIAL_STATE = {
    childCatObj: {},
    headerBadge: [],
    header: "",
    product: []
}

export default function productComReducer(state = INITIAL_STATE, action) {
    // console.log(action.payload)
    switch (action.type) {
        case "SET_productComData":
            return {
                ...state,
                childCatObj: action.payload.element,
                headerBadge: action.payload.headerBadge,
                header: action.payload.header,
                product: [...action.payload.prd]
            }
        default:
            return state;
    }
}

