import React from 'react'
import './slider-component.scss'

const SliderComponent = ({component}) => {

    const {title, text} = component

    return (
    <div className=' slider-component'>
            <div>
                <div className='slider-component-name'>
                    {title}
                </div>
                <div className='slider-component-text'>
                    {text}
                </div>
            </div>
            <button className='button button-first' type='button'>подробнее
            </button>
        </div>

    )
}
export default SliderComponent