import {
    EXP_ERROR,
    EXP_LOADED,
    EXP_START,
    PRODUCT_ERROR,
    PRODUCT_LOADED,
    PRODUCT_START,
} from '../action-types'
import axios from '../../axios/API'

export function productDataLoadAction() {
    return async dispatch => {
        try {
            dispatch(productLoadStart())
            const resolve = await axios.get('/table/equipment.json')
            dispatch(productLoaded(resolve.data))
        } catch (e) {
            dispatch(productLoadError(e))
        }
    }
}

export const expirienceLoadStart = () => {
    return {
        type: EXP_START
    }
}

export const productLoaded = (newTable) => {
    return {
        type: EXP_LOADED,
        payload: newTable
    }
}

export const productLoadError = (error) => {
    return {
        type: EXP_ERROR,
        payload: error
    }
}



