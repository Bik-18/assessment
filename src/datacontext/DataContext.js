import React, {  createContext } from "react";


const datas = [
    {
        id: 1,
        name: "shirt",
        markedPrice:null,
        sellingPrice: 200,
        stock: 10,
        pika: "https://www.emptyops.com/demo/above/wp-content/uploads/2019/07/Gildan_t-shirts_1.jpg",
    },
    {
        id: 2,
        name: "headphone",
        markedPrice:300,
        sellingPrice: 130,
        stock: 25,
        pika: "https://www.urbanista.com/media/catalog/product/cache/7acd0408486795a95719a4a243aa228c/b/l/black_losangeles_studio-packshot_1.png",
    },
    {
        id: 3,
        name: "book",
        markedPrice:250,
        sellingPrice: 180,
        stock: 13,
        pika: "https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.203",
    },
    {
        id: 4,
        name: "jeans",
        markedPrice:210,
        sellingPrice: 110,
        stock: 9,
        pika: "https://media.gq.com/photos/60fb256f19a385ea1742392d/master/w_1280%2Cc_limit/Levi's_501_'93_straight_jeans.jpg",
    },
    {
        id: 5,
        name: "laptop",
        markedPrice:null,
        sellingPrice: 2500,
        stock: 7,
        pika: "https://static.acer.com/up/Resource/Acer/Laptops/Swift_3X/Images/20201008/Acer-Swift-3X_SF314-510G_Gold_modelpreview.png",
    },
    {
        id: 6,
        name: "mobile",
        markedPrice:505,
        sellingPrice: 380,
        stock: 28,
        pika: "https://mobilemall.pk/public_html/images/no_image.png",
    },

    
];

export const DataContext = createContext()

export const DataProvider = (props) => {

    return (
        <DataContext.Provider value={datas}>
            {props.children}
        </DataContext.Provider>
    );
}