import React from 'react'
import SliderComponent from '../slider-component'
import {useSelector} from 'react-redux'
import ContentLoader from "react-content-loader"

import SwiperCore, {Autoplay, Navigation, Scrollbar} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import './product.scss'
import {renderArray} from '../../utils'

SwiperCore.use([Autoplay, Navigation, Scrollbar])
const params = {
    spaceBetween: 18,
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
        dragClass: 'swiper-drag'
    }
}


const Product = () => {

    const product = useSelector(({product}) =>  product.product)
    // let isLoaded = false;
    const isLoaded = useSelector(({product}) => product.isLoaded)
    return (
        <div className="wrapper wrapper-content sand">
            <div className="product">
                <h1>Программные продукты</h1>
                <div className="product_components">
                    <Swiper {...params} >
                        {isLoaded ?
                            product.map((el) => {
                                    return (
                                        <SwiperSlide key={`${el.id}_swiper`}>
                                            <SliderComponent
                                                component={el}
                                                key={`${el.title}_${el.id}`}/>
                                        </SwiperSlide>
                                    )
                                }
                            )
                            : renderArray(
                                <SwiperSlide >
                                    <div className=' slider-component'>
                                        <div>
                                            <ContentLoader
                                                speed={2}
                                                width={550}
                                                height={350}
                                                viewBox="0 0 550 350"
                                                backgroundColor="#F0F2F5"
                                                foregroundColor="#99e6ff"
                                            >
                                                <rect x="0" y="0" rx="8" ry="8"
                                                      width="500"
                                                      height="24"/>
                                                <rect x="0" y="40" rx="8" ry="8"
                                                      width="500"
                                                      height="138"/>
                                                <rect x="280" y="220" rx="8"
                                                      ry="8" width="200"
                                                      height="50"/>
                                            </ContentLoader>
                                        </div>
                                    </div>

                                </SwiperSlide >)
                        }
                    </Swiper>
                    <div className='swiper-button-prev'/>
                    <div className='swiper-button-next'/>
                    <div className='swiper-scrollbar'/>
                    <div className='swiper-drag'/>
                </div>

            </div>
        </div>
    )
}

export default (Product)