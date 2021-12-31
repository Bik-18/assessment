import React, { useContext } from 'react'
import { DataContext } from "../datacontext/DataContext";
import {connect} from "react-redux"
import Product from './Product'
import "./ProductList.css"

const ProductList = ({products}) => {

    const datas = useContext(DataContext);
    console.log(datas);

    const res = products.map((data) => {
        return (

            <Product data={data} key={data.id} />
        )
    })

    return (
        <>
            
                
                <div className='product-list'>
                    {res}
                </div>
            
        </>
    )
}

const mapStateToProps=state=>{
    return{
        products:state.shop.products
    }
}

export default connect(mapStateToProps) (ProductList);
