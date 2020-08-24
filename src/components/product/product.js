import React, {useEffect} from 'react'
import SliderComponent from '../slider-component'
import {connect} from 'react-redux'


import SwiperCore, {Autoplay, Navigation, Scrollbar} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import './product.scss'

SwiperCore.use([Autoplay, Navigation, Scrollbar])
const params = {
    observeParents: true,

    spaceBetween: 18,
    loop: true,
    loopPreventsSlide: false,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
        draggable: true,
        snapOnRelease: true,
        // dragSize: 350,
        dragClass: 'swiper-drag'
    }
    //надо разобраться с автоплей и хуками
    // autoPlay: {
    //     delay: 500,
    //     disableOnInteraction: false,
    //     waitForTransition: false
    // },
    //     lockClass: '.swiper-scrollbar-lock'
}

const Product = ({product}) => {
    return (
        <div className="wrapper sand">
            <div className="product">
                <h1>Программные продукты</h1>
                <div className="product_components">
                    <Swiper {...params} >
                        {
                            product.map((el) => {
                                    return (
                                        <SwiperSlide>
                                            <SliderComponent
                                                component={el}
                                                key={`${el.title}_${el.id}`}/>
                                        </SwiperSlide>
                                    )
                                }
                            )
                        }
                    </Swiper>
                    <div className='swiper-button-prev '></div>
                    <div className='swiper-button-next '></div>
                    <div className='swiper-scrollbar'></div>
                    <div className='swiper-drag'></div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = ({product}) => {
    return {product}

}

export default connect(mapStateToProps)(Product)