import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            name: "shirt",
            markedPrice: null,
            sellingPrice: 200,
            stock: 10,
            pika: "https://www.emptyops.com/demo/above/wp-content/uploads/2019/07/Gildan_t-shirts_1.jpg",
        },
        {
            id: 2,
            name: "headphone",
            markedPrice: 300,
            sellingPrice: 130,
            stock: 25,
            pika: "https://www.urbanista.com/media/catalog/product/cache/7acd0408486795a95719a4a243aa228c/b/l/black_losangeles_studio-packshot_1.png",
        },
        {
            id: 3,
            name: "book",
            markedPrice: 250,
            sellingPrice: 180,
            stock: 13,
            pika: "https://dictionary.cambridge.org/images/thumb/book_noun_001_01679.jpg?version=5.0.203",
        },
        {
            id: 4,
            name: "jeans",
            markedPrice: 210,
            sellingPrice: 110,
            stock: 9,
            pika: "https://media.gq.com/photos/60fb256f19a385ea1742392d/master/w_1280%2Cc_limit/Levi's_501_'93_straight_jeans.jpg",
        },
        {
            id: 5,
            name: "laptop",
            markedPrice: null,
            sellingPrice: 2500,
            stock: 7,
            pika: "https://static.acer.com/up/Resource/Acer/Laptops/Swift_3X/Images/20201008/Acer-Swift-3X_SF314-510G_Gold_modelpreview.png",
        },
        {
            id: 6,
            name: "mobile",
            markedPrice: 505,
            sellingPrice: 380,
            stock: 28,
            pika: "https://mobilemall.pk/public_html/images/no_image.png",
        },
    ],
    cart: [],
    cuurentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(prod => prod.id === action.payload.id)
            const incart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: incart
                    ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
                    : [...state.cart, { ...item, qty: 1 }]
            }


        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }

        case actionTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
            }

        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem:action.payload,
            }

        default:
            return state;
    }
}

export default shopReducer;