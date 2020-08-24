import React from 'react'
import SVG from '../svg-img/svg'
import './service-component.scss'

const ServiceComponent = ({title}) => {

    return (
        <div className='service-component'>
            <div className='service-component__name'>
                {title}
            </div>
            <div className='service-component__text'></div>
            <SVG name='next'/>
        </div>
    )
}

export default ServiceComponent