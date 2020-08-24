import React from 'react'
import './news-block.scss'

const NewsBlock = () => {

    return (<div className='news-block'>

        <div className='news-title'>Актуальные новости и предложения</div>

        <ul className='news-list'>
            <li className='news-list-item'>Продукты</li>
            <li className='news-list-item'>Услуги</li>
            <li className='news-list-item'>Услуги</li>
            <li className='news-list-item'>
                Как установить льготный тариф страховых взносов для малого и среднего бизнеса. «1С:ЗУП 8» (ред. 3)
                <span
                    className='data-span'>12.12.12</span></li>
            <li className='news-list-item'>Услуги</li>
        </ul>
        <button className='news-all button-confirm'>Все новости</button>
    </div>)
}

export default NewsBlock