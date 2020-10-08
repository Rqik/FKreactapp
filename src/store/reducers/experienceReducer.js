import {EXP_LOADED, EXP_START, EXP_ERROR} from '../action-types'

const initialState = {
    items: [{
        company: '',
        client: '',
        name: '',
        data: '',
        version: '',
        branch: ''
    },],
    // experience: [],
    isLoaded: false,
    error: null
}

export default function experienceReducer(state = initialState, action) {

    switch (action.type) {
        case EXP_START: {
            return {
                ...state,
                isLoaded: false,
                error: null
            }
        }
        case EXP_LOADED:
            return {
                ...state,
                 items: action.payload,
                isLoaded: true
            }
        case EXP_ERROR :
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            }

        default:

            return state
    }

}
