import React , {Fragment} from 'react'

import Product from '../components/product'
import Service from '../components/service'
import FormContact from '../components/form-contact'
import HeaderSlide from '../components/header-slide'

const  HomePage = () => {
    return (
        <Fragment>
            <HeaderSlide/>
            <Product/>
            <Service/>
            <FormContact/>
        </Fragment>
    )
}
export default HomePage