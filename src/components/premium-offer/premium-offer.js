import React from 'react'
import './premium-offer.scss'

const PremiumOffer = () => {
    return (
        <div className='premium-offer'>
            <div className='premium-offer_label'>Консультации по выбору
                программного обеспечения
            </div>
            <div className='premium-offer_text'>
              <span> Самостоятельно сориентироваться в полном спектре решений «1С»
                бывает непросто.</span>
                <br/>
                Мы готовы организовать профессиональную консультацию по выбору
                программного обеспечения любым удобным для Вас способом в
                удобное для Вас время:
                <ul className='offer-list'>
                    <li>по телефону</li>
                    <li> в офисе нашей компании</li>
                    <li>в Вашем офисе</li>
                </ul>


            </div>
            <div className='premium-offer_button'>
                <button className='button button-premium_f'>Подробнее</button>
                <button className='button button-premium'>Оставить заявку
                </button>
            </div>

        </div>
    )
}

export default PremiumOffer