import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cartItems: [],
}
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemsToCart (state , action) {
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
        removeItemFromCart (state , action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id); // loops through the cartItems array and keeps only the items whose id does not match the id provided in action.payload
        },
        clearCart (state) { // No action parameter because this operation doesn’t require any specific information or data because it’s a universal action that affects the entire cart, not individual items.
            state.cartItems = [];
        },
        increaseItemQauntity (state , action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload.id);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        decreaseItemQauntity (state , action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload.id);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            }
        }
    }
});
// export the action creators so they can be imported and used in other parts of the application to dispatch actions to update the Redux state.
export const { 
    // When I defined the below functions inside the reducers object of createSlice, Redux Toolkit automatically generates an action creator with the same name. So, the below list is a list of action creators.
    addItemsToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQauntity,
    decreaseItemQauntity,
} = CartSlice.actions // bundle these action creators under the CartSlice.actions object.

export default CartSlice.reducer; // allows the reducer to be included in the Redux store configuration to handle updates to the state.


