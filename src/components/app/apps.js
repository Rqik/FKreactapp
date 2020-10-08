import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'

import './apps.scss'
import {
    CompanyPages,
    EquipmentPages,
    ExperiencePages,
    FreshPages,
    HomePage,
    ProductPage,
    ServicePages
} from '../../pages'
import Header from '../header'
import Footer from '../footer'
import WorkPages from '../../pages/work-pages'
import ContactPages from '../../pages/contact-pages'
import {useDispatch} from 'react-redux'
import {productDataLoadAction, serviceDataLoadAction} from '../../store/actions'
import Card from '../Card'


const App = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(productDataLoadAction())
        dispatch(serviceDataLoadAction())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/product' component={ProductPage}/>
                <Route path="/contact" component={ContactPages}/>
                <Route path="/work" component={WorkPages}/>
                <Route path="/fresh" component={FreshPages}/>
                <Route path="/service" component={ServicePages}/>
                <Route path="/equipment" exact component={EquipmentPages}/>
                <Route path='/equipment/:id' component={Card}/>
                <Route path="/company" component={CompanyPages}/>
                <Route path="/experience" component={ExperiencePages}/>
            </Switch>
            <Footer/>
        </Fragment>
    )
}

export default (App)