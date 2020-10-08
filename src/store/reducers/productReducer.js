import {PRODUCT_ERROR, PRODUCT_LOADED, PRODUCT_START} from '../action-types'

const initialState = {
    product: [],
    isLoaded: false,
    error: null
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case PRODUCT_START:
        return {
            ...state,
            isLoaded: false,
            error: null
        }
        case PRODUCT_LOADED :
            return {
                ...state,
                product: action.payload,
                isLoaded: true
            }
        case PRODUCT_ERROR:
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            }


        default:
            return state
    }
}
export default reducer;