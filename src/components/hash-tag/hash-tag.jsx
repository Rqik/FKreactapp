import React , {Fragment}from 'react'
import './hash-tag.scss'

var hashItems = ['продукты', 'товары', 'услуги']

const HashTag = () => {
    return (
        <Fragment>
            <ul className='hash-tags'>
                {hashItems.map((el) => {
                    return (<li className=' button-hash_tag'>{el}</li>)
                })}
            </ul>
        </Fragment>
    )
}

export default HashTag