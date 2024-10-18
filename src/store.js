import { configureStore } from "@reduxjs/toolkit"; //imports the configureStore function from @reduxjs/toolkit, used to create the Redux store.
import {cartReducer} from './Components/CartSlice'; //imports the reducer function, cartReducer, from the CartSlice file, for managing the shopping cart state defined in the file.

const store = configureStore({ //creates the Redux store by calling configureStore.

    /** 
     * @param reducer - field used to combine different reducers into one object. 
     * Each key in this object represents a slice of the global state, and each value is the reducer function that manages that slice. 
    */
    reducer: {
        cart: cartReducer,
    },
});

export default store;