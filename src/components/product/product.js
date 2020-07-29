import React from 'react'
import SliderComponent from '../slider-component'
import { connect } from 'react-redux'

import './product.scss'

const Product = ({product}) => {
    return (
        <div className="wrapper sand">
            <div className="product">
                <h1>Программные продукты</h1>

                <div className="product_components">

                    {
                        product.map((el)=>{
                            return <SliderComponent component={el} key={`${el.title}_${el.id}`}/> })
                    }

                </div>

            </div>
        </div>
    )
}

const mapStateToProps = ({product}) => {
    return {product}

}

export default connect(mapStateToProps)(Product)