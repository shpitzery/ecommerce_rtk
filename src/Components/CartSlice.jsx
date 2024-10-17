import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cartItems: [],
}
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemsToCart(state , action) {
            // The .find() method is used to look for an item in the cart where the id matches the id of the item being added (from action.payload).
            // The payload holds the data associated with the action (e.g., the item to add to the cart)
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; 
            } 
            else { // the reducer knows what item to add to the cart by using the data in action.payload.
                state.cartItems.push({...action.payload , quantity: 1 }); //creates a new object that includes all the properties of action.payload and adds the quantity property with an initial value of 1
            }
        },
        removeItemFromCart(state , action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id); // loops through the cartItems array and keeps only the items whose id does not match the id provided in action.payload
        }        
    }
 
});


