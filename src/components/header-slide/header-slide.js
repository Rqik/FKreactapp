import React from 'react'
import mackBookIMG from '../../assets/Macbook.png'
import './header-slide.scss'

const HeaderSlide = () => {
    return (
        <div className={'wrapper'}>
            <h1 className={'header-slide-name'}>Автоматизация управления и учета
                на базе програмных продуктов «1С»</h1>
            <div className={'header-slide-text'}>
                Регулярная и оперативная
                поддержка пользователей 1С
                по единому, разработанному фирмой «1С», Стандарту регулярного
                сопровождения 1С.
                <img src={mackBookIMG} alt=""/>
            </div>
            <div className="button-price">
                <button className='button button-secondary'>подробнее</button>
                <button className='button button-first' >цены</button>
            </div>

            <div className={'header-slide-text'}> </div>

        </div>
    )
}

export default HeaderSlide