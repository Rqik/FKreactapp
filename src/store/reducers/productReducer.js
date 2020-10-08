import {
    EXP_LOADED,
    PRODUCT_LOADED,
    SERVICES_DATA_LOADED,
    TABLE_LOADED
} from '../action-types'

const initialState = {
    product: [],
    service: [],
    table: {
        equipment: [
            {
                name: '',
                price: '',
                type: ''

            }]
    },
    experience: {
        items: [{
            company: '',
            client: '',
            name: '',
            data: '',
            version: '',
            branch: ''
        },],

        expLoaded: false
    },
    isLoaded: false
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case PRODUCT_LOADED :
            console.log('product_loaded', action.payload)
            return {
                ...state,
                product: action.payload,
                isLoaded: true
            }
        case SERVICES_DATA_LOADED:
            console.log('service_loaded', action.payload)
            return {
                ...state,
                service: action.payload,
                isLoaded: true,
            }
        case TABLE_LOADED:
            console.log('table_loaded', action.payload)
            return {
                ...state,
                table: action.payload,
                isLoaded: true,

            }
        case EXP_LOADED:
            return {
                ...state,
                experience: {items: action.payload, expLoaded: true}
            }
        default:
            return statei
    }
}
export default reducer;