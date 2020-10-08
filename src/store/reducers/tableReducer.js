import {
    TABLE_ERROR,
    TABLE_LOADED,
    TABLE_START,
} from '../action-types'

const initialState = {
    equipment: [
        {
            name: '',
            price: '',
            type: ''

        }],
    isLoaded: false,
    error: null
}


export default function tableReducer(state = initialState, action) {
    switch (action.type) {
        case TABLE_START: {
            console.log('TABLE_START')
            return {
                ...state,
                isLoaded: false,
                error: null
            }
        }
        case TABLE_LOADED:
            console.log('TABLE_LOADED')

            return {
                ...state,
                equipment: action.payload,
                isLoaded: true

            }

        case TABLE_ERROR :
            return {
                ...state,
                isLoaded: true,
                error: action.payload
            }

        default:
            return state
    }
}