import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'

import './apps.scss'
import {
    CompanyPages,
    EquipmentPages, ExpiriencePages,
    FreshPages,
    HomePage,
    ProductPage,
    ServicePages
} from '../pages'
import Header from '../header'
import Footer from '../footer'
import WorkPages from '../pages/work-pages'
import ContactPages from '../pages/contact-pages'


const App = () => {

    React.useEffect(()=>{})

    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route path='/'  exact component={HomePage}/>
                <Route path='/product' component={ProductPage}/>
                <Route path="/contact" component={ContactPages}/>
                <Route path="/work" component={WorkPages}/>
                <Route path="/fresh" component={FreshPages}/>
                <Route path="/service" component={ServicePages}/>
                <Route path="/equipment" component={EquipmentPages}/>
                <Route path="/company" component={CompanyPages}/>
                <Route path="/experience" component={ExpiriencePages}/>
            </Switch>
            <Footer/>
        </Fragment>
    )
}

export default App