import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import slice from './getProducts'


const store = configureStore({
    reducer: {
        products: slice,
    }
},composeWithDevTools(applyMiddleware(thunk)))

export default store