import React from 'react'
import "./Product.css"

import { connect } from "react-redux"
import { addToCart } from '../redux/shopping/shopping-actions';

const Product = ({ data, addToCart }) => {
    const { id, name, markedPrice, sellingPrice, stock, pika } = data;
    return (
        <>
            <div className="product">
                <div className="pika">
                    <img src={pika} alt="imagex" />
                </div>
                <div className="container">
                    <div className="product-name"> {name}</div>
                    <div className="product-price">
                        {markedPrice ?
                            <><span className='mp'>Rs {markedPrice}</span><span className='sp'>  {`Rs ${sellingPrice}`}</span></>
                            : <span>Rs {sellingPrice}</span>}

                    </div>
                    <div className='product-stock'>In Stocks ({stock})</div>
                    <button className='addToCart' onClick={() => addToCart(id)}>Add to cart</button>

                </div>

            </div>
        </>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null,mapDispatchToProps) (Product)
