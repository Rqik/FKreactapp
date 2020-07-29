import React from 'react'
import './service-component.scss'

const ServiceComponent = ({title}) => {

    return (
        <div className='service-component'>
            <div className='service-component__name'>
                {title}
            </div>
            <div className='service-component__text'></div>

        </div>
    )
}

export default ServiceComponent