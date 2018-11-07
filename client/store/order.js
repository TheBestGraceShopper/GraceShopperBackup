import axios from 'axios'

const initialState = {
    orders: []
}

// ACTION TYPES

// const GET_CART = 'GET_CART'
const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const GET_ORDERS = 'GET_ORDERS'
// const INCEASE_QUANTITY = 'INCREASE_QUANTITY'
// const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
// const GET_PREV_ORDER = 'GET_PREV_ORDER'

// ACTION CREATORS

const getCart = cart => ({
    type: GET_CART,
    cart
})

const addProductToCart = productId => ({
    type: ADD_PRODUCT,
    productId
})

const removeProductToCart = productId => ({
    type: REMOVE_PRODUCT,
    productId
})

const getOrders = (orders) => ({
    type: GET_ORDERS,
    orders
})

// const increaseQuantity = (id, val) => ({
//     type: INCEASE_QUANTITY,
//     id,
//     up: val,
// })

// const decreaseQuantity = (id, val) => ({
//     type: DECREASE_QUANTITY,
//     id,
//     down: val,
// })

// const getPrevOrder = (orders) => ({
//     type: GET_PREV_ORDER,
//     orders
// })

// THUNKAROOS

// export const fetchCart = userId => async dispatch => {
//     try {
//         const {data} = await axios.get(`/api/order/${userId}`)
//         dispatch(getCart(data))

//     } catch(err){
//         console.log(err)
//     }
// }

export const addProduct = (product, userId, orderId) => async dispatch => {
    try {
        const response = await axios.post(`/api/order/${userId}`, product, orderId)
        const newProduct = response.data
        const action = addProductToCart(newProduct)
        dispatch(action)
    }
    catch (err) {
        console.error(err)
    }
}

export const deleteProduct = productId => async dispatch => {
    try {
        await axios.post(`/api/order/delete/${productId}`)
        const action = removeProductToCart(productId)
        dispatch(action)
    }
    catch (err) {
        console.error(err)
    }
}

export const addQuantity = (userId, productId) => async dispatch =>{
    try{
        const response = await axios.put(`/api/order/${userId}`, productId)
        const updatedCart = response.data
        const action = increaseQuantity(updatedCart)
        dispatch(action)
    }
    catch (err) {
        console.err(err)
    }
}

export const removeQuantity = (userId, productId) => async dispatch =>{
    try{
        const response = await axios.put(`/api/order/${userId}`, productId)
        const updatedCart = response.data
        const action = decreaseQuantity(updatedCart)
        dispatch(action)
    }
    catch (err) {
        console.err(err)
    }
}

export const fetchOrders = () => async dispatch => {
    try {
      const res = await axios.get('/api/orders/pastOrders')
      dispatch(getOrders(res.data))
    } 
    catch (err) {
      console.error(err)
    }
}

// REDUCER
 const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
    //   case GET_CART:
    //     return {...state, cart: action.cart}
      case ADD_PRODUCT:
        return {...state, cart: [...state.cart, action.product]}
      case REMOVE_PRODUCT:
        return {...state, cart: [...state.cart.filter(product => product.id !== action.productId)]}
      case GET_ORDERS:
        return {...state, orders: action.orders}
    //   case INCEASE_QUANTITY:
    //     return {...state, cart:[...state.cart.map(item =>{
    //         if(item.id === action.id){item.quantity += action.up}
    //         return item;
    //     })]}
    //   case DECREASE_QUANTITY:
    //     return {...state, cart:[...state.cart.map(item =>{
    //         if(item.id === action.id){item.quantity -= action.down}
    //         return item;
    //     })]}
    //   case GET_PREV_ORDER:
    //     return {...state, prevOrders: action.orders}
      default:
        return state
    }

}

export default ordersReducer;
