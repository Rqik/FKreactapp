import React from 'react'
import './service.scss'
import ServiceComponent from '../service-component'
import {connect} from 'react-redux'

const Service = ({service}) => {
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
const mapStateToProps = ({service}) => {
    return {
        service
    }
}
export default connect(mapStateToProps)(Service)