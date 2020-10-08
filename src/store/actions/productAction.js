import {PRODUCT_ERROR, PRODUCT_LOADED, PRODUCT_START,} from '../action-types'
import axios from '../../axios/API'

export function productDataLoadAction() {
    return async dispatch => {
        try {
            dispatch(productLoadStart())
            const resolve = await axios.get('/product.json')
            dispatch(productLoaded(resolve.data))
        } catch (e) {
            dispatch(productLoadError(e))
        }
    }
}

export const productLoadStart = () => {
    return {
        type: PRODUCT_START
    }
}

export const productLoaded = (newTable) => {
    return {
        type: PRODUCT_LOADED,
        payload: newTable
    }
}

export const productLoadError = (error) => {
    return {
        type: PRODUCT_ERROR,
        payload: error
    }
}



