import { configureStore } from '@reduxjs/toolkit';
import dropdownSearchReducer from "../features/dropdownSearch/dropdownSearchSlice.js";
import contactFormReducer from "../features/contactForm/contactFormSlice.js";

export default configureStore({
    reducer: {
        dropdownSearch: dropdownSearchReducer,
        contactForm: contactFormReducer
    }
});