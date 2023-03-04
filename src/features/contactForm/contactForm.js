import {createSlice} from "@reduxjs/toolkit";

export const contactFormSlice = createSlice({
    name: "contactForm",
    initialState: {
        visible: false
    },
    reducers: {
        showContactForm: state => {
            state.visible = true;
        },
        hideContactForm: state => {
            state.visible = false;
        }
    }
});

export const {showContactForm, hideContactForm} = contactFormSlice.actions;
export default contactFormSlice.reducer;