import React , {Fragment} from 'react'

import Product from '../product'
import Service from '../service'
import FormContact from '../form-contact'
import Footer from '../footer'
import HeaderSlide from '../header-slide'

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