import React, {useState} from 'react'
import './service.scss'
import ServiceComponent from '../service-component'
import {connect, useSelector} from 'react-redux'

const Service = () => {

    const service = useSelector(({service})=> service)
    return (
        <div className='wrapper wrap-service'>
            <div className="service">
                <h1>Услуги</h1>
                <div className="service-com">
                    {
                        service.map((el) => {
                            return <ServiceComponent title={el.title}
                                                     key={`${el.title}_${el.id}`}/>
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default (Service)