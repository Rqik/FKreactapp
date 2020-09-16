import {
    EXP_LOADED,
    PRODUCT_LOADED,
    SERVICES_DATA_LOADED,
    TABLE_LOADED
} from '../action-types'

const productLoaded = (newProduct) => {
    return {
        type: PRODUCT_LOADED,
        payload: newProduct,
    }
}

const expLoaded = (exp)=>{
    return{
        type: EXP_LOADED,
        payload: exp
    }
}
const serviceLoaded = (newService) =>{
    return{
        type: SERVICES_DATA_LOADED,
        payload: newService

    }
}

const tableLoaded = (newTable) =>{
    return{
        type: TABLE_LOADED,
        payload: newTable
    }
}
export {
    productLoaded,
    serviceLoaded,
    tableLoaded,
    expLoaded
}