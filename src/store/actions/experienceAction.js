import {
    EXP_ERROR,
    EXP_LOADED,
    EXP_START
} from '../action-types'
import axios from '../../axios/API'

export function experienceDataLoadAction() {
    return async dispatch => {
        try {
            dispatch(experienceLoadStart())
            const resolve = await axios.get('/experience.json')
            dispatch(experienceLoaded(resolve.data.items))
        } catch (e) {
            dispatch(experienceLoadError(e))
        }
    }
}

export const experienceLoadStart = () => {
    return {
        type: EXP_START
    }
}

export const experienceLoaded = (newTable) => {
    return {
        type: EXP_LOADED,
        payload: newTable
    }
}

export const experienceLoadError = (error) => {
    return {
        type: EXP_ERROR,
        payload: error
    }
}



