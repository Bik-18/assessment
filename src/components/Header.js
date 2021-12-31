import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import "./Header.css"

const Header = ({ cart }) => {
    const [cartCount, setCart] = useState(0);
    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty
        });
        setCart(count)
    }, [cart, cartCount])
    return (
        <>
            <div className='header'>

                <div className='h1'>Products</div>
                <div className='h1'>Cart {cartCount}</div>


            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Header)
