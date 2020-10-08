import {
    SERVICES_ERROR,
    SERVICES_LOADED,
    SERVICES_START
} from '../action-types'

const initialState = {
    service: [],
    isLoaded: false,
    error: null
}

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {

        case SERVICES_START:
            return {
                ...state,
                isLoaded: false,
                error: null
            }
        case SERVICES_LOADED:
            return {
                ...state,
                service: action.payload,
                isLoaded: true,
            }
        case SERVICES_ERROR:
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            }
        default:
            return state
    }
}

export default serviceReducer