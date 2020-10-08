import React, {Fragment} from 'react'


const ProductPage = ({product}) => {
    const {name, text} = product
    return (
            <Fragment>
            <span>
                {name}
            </span>
                <span>
                {text}
            </span>
            </Fragment>
    )
}



export default ProductPage