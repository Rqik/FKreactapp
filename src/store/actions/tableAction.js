import {TABLE_ERROR, TABLE_LOADED, TABLE_START,} from '../action-types'
import axios from '../../axios/API'

export function tableDataLoadAction() {
    return async dispatch => {
        try {
            dispatch(tableLoadStart())
            const resolve = await axios.get('/table/equipment.json')
            dispatch(tableLoaded(resolve.data))
        } catch (e) {
            dispatch(tableLoadError(e))
        }
    }
}

export const tableLoadStart = () => {
    return {
        type: TABLE_START
    }
}

export const tableLoaded = (newTable) => {
    return {
        type: TABLE_LOADED,
        payload: newTable
    }
}

export const tableLoadError = (error) => {
    return {
        type: TABLE_ERROR,
        payload: error
    }
}



