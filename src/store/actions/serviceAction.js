import {SERVICES_ERROR, SERVICES_LOADED, SERVICES_START} from '../action-types'
import axios from '../../axios/API'

export function serviceDataLoadAction() {
    return async dispatch => {
        try {
            dispatch(serviceLoadStart())
            const resolve = await axios.get('/services.json')
            dispatch(serviceLoaded(resolve.data))
        } catch (e) {
            dispatch(serviceLoadError(e))
        }
    }
}

export const serviceLoadStart = () => {
    return {
        type: SERVICES_START
    }
}

export const serviceLoaded = (newTable) => {
    return {
        type: SERVICES_LOADED,
        payload: newTable
    }
}

export const serviceLoadError = (error) => {
    return {
        type: SERVICES_ERROR,
        payload: error
    }
}


