import React, {Fragment} from 'react'
import './hash-tag.scss'

var hashItems = ['продукты', "Инструменты",
    "Новое",
    "Популярное",
    "Пользовательское сие",
    "Поддержать проект", 'товары', 'услуги', 'товары', 'услуги', 'товары', 'услуги', 'товары', 'услуги', 'товары', 'услуги', 'товары', 'услуги', 'товары', 'услуги', 'товары', 'услуги', 'товары', 'услуги', 'товары', 'услуги']

const HashTag = () => {
    return (
        <Fragment>
            <ul className='hash-tags'>
                {hashItems.map((el,index) => {
                    return (<li key={el+'_'+index} className=' button-hash_tag'>
                        {el[0].toUpperCase() + el.slice(1)}
                    </li>)
                })}
            </ul>
        </Fragment>
    )
}

export default HashTag