import React from 'react'
import './card.scss'

// withRouter добавляет параметры math history location
import {withRouter} from 'react-router-dom'

const Card = ({history}) => {
    console.log('math')
// Здесь тоже через math params + fetch запрос получение данных конкретного
// id элемента
    console.log(history)
    return (
        <div className={'wrapper'}>
            <section className=''>
                <div>
                    <div className='section_title'>{}</div>
                    <div className='section-content_text'>caasdsadasdsds
                        asdasdrd
                    </div>
                </div>
            </section>
        </div>
    )
}

export default withRouter(Card)