import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../redux/shopping/shopping-actions';
import "./Cart.css"

const Cart = ({ cart ,removeFromCart}) => {
    const [totalPrice,setPrice]=useState(0);
    const [totalItems,setItem]=useState(0);
    useEffect(()=>{
        let items=0;
        let prices=0;
        cart.forEach(item=>{
            items+=item.qty;
            prices+=item.qty*item.sellingPrice
        })

        setItem(items);
        setPrice(prices)
    },[cart,totalItems,totalPrice])
    return (
        <>
            <div className='cart'>
                {cart.map(item => (
                    <div className="cart-product" key={item.id}>
                        <div className="pika">
                            <img src={item.pika} alt="imagex" />
                        </div>
                        <div className="container">
                            <div className="product-name"> {item.name}</div>
                            <div className="product-price">
                                {item.markedPrice ?
                                    <><span className='mp'>Rs {item.markedPrice}</span><span className='sp'>  {`Rs ${item.sellingPrice}`}</span></>
                                    : <span>Rs {item.sellingPrice}</span>}

                            </div>
                            <div className='product-stock'>In Stocks ({item.stock})</div>
                            <div>Qty:{item.qty}</div>
                            <button className='del'onClick={()=>removeFromCart(item.id)} >Del</button>

                        </div>

                    </div>
                ))}
                <div className='summary'>
                    <h3>Cart Summary</h3>
                    <div>TOTAL:{totalItems} items</div>
                    <div>Rs {totalPrice}</div>
                    <button >Check out</button>

                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}
const mapDispatchToProps = disaptch => {
    return {
        removeFromCart:(id)=>{
            disaptch(removeFromCart(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)
