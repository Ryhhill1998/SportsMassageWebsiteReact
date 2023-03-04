import { configureStore } from '@reduxjs/toolkit';
import dropdownSearchReducer from "../features/dropdownSearch/dropdownSearchSlice.js";

export default configureStore({
    reducer: {
        dropdownSearch: dropdownSearchReducer
    }
});