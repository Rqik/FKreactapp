import React, {Fragment, useContext} from 'react'
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
import {ProgramContext} from '../../program-context'
import {useDispatch} from 'react-redux'
import {productLoaded, serviceLoaded, tableLoaded} from '../../store/actions'


const App = () => {

    const data = useContext(ProgramContext)


    //mapDispatchToProps
    const dispatch = useDispatch()
    //mapStateToProps

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => {
        data.getProgram().then(res => {
            dispatch(productLoaded(res.product))
            dispatch(serviceLoaded(res.services))
            dispatch(tableLoaded(res.table))

        })


        /* Код для получения данных через get вместо axios*/


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/product' component={ProductPage}/>
                <Route path="/contact" component={ContactPages}/>
                <Route path="/work" component={WorkPages}/>
                <Route path="/fresh" component={FreshPages}/>
                <Route path="/service" component={ServicePages}/>
                <Route path="/equipment" component={EquipmentPages}/>
                <Route path="/company" component={CompanyPages}/>
                <Route path="/experience" component={ExperiencePages}/>
            </Switch>
            <Footer/>
        </Fragment>
    )
}

export default (App)