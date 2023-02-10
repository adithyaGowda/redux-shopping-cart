import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsList: [],
  totalQuantity: 0,
  showCart: false,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceData(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.itemsList = action.payload.itemsList;
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      state.changed = true;
      const removedItem = state.itemsList.find(
        (item) => item.id === action.payload
      );

      if (removedItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(
          (item) => item.id !== action.payload
        );
      } else {
        removedItem.quantity--;
        removedItem.totalPrice -= removedItem.price;
      }
      state.totalQuantity--;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, setShowCart, removeFromCart, replaceData } =
  cartSlice.actions;

export default cartSlice;
