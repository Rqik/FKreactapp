import React from 'react'
import './premium-offer.scss'
const PremiumOffer = () => {
    return (
    <div className='premium-offer'>
        <div className='premium-offer_label'>Консультации по выбору программного обеспечения</div>
        <div className='premium-offer_text'>Самостоятельно сориентироваться в полном спектре решений «1С» бывает непросто.</div>
        <div className='premium-offer_button'>
            <button className='button button-premium'>Подробнее</button>
            <button className='button button-premium_f'>Оставить заявку</button>
        </div>

    </div>
    )
}

export default PremiumOffer