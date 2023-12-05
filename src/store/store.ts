import { configureStore } from "@reduxjs/toolkit";

import slice from './getProducts'


const store = configureStore({
    reducer: {
        products: slice,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;