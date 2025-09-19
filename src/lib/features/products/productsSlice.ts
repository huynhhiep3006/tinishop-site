import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Color = {
  name: string;
  code: string;
};

// Define a type for the slice state
interface ProductsState {
  colorSelection: Color;
  sizeSelection: string;
  price: any;
}

// Define the initial state using that type
const initialState: ProductsState = {
  colorSelection: {
    name: "Brown",
    code: "bg-[#4F4631]",
  },
  sizeSelection: "Digital",
  price: 1,
};

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setColorSelection: (state, action: PayloadAction<Color>) => {
      state.colorSelection = action.payload;
    },
    setSizeSelection: (state, action: PayloadAction<string>) => {
      state.sizeSelection = action.payload;
      if (action.payload === "Digital") {
        state.price = 1;  // Giá cho sách điện tử
      } else if (action.payload === "Physical Books") {
        state.price = 3;  // Giá cho sách vật lý
      }
    },
  },
});

export const { setColorSelection, setSizeSelection } = productsSlice.actions;

export default productsSlice.reducer;
