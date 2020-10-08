import {combineReducers} from 'redux'
import product from './productReducer'
import table from './tableReducer'
import service from './serviceReducer'
import experience from './experienceReducer'
export default combineReducers({
    product,
    table,
    service,
    experience
})