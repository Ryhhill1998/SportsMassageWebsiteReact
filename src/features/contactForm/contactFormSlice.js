import {createSlice} from "@reduxjs/toolkit";

export const contactFormSlice = createSlice({
    name: "contactForm",
    initialState: {
        visible: false
    },
    reducers: {
        showContactForm: state => {
            state.visible = true;
            document.body.classList.add("no-scroll");
        },
        hideContactForm: state => {
            state.visible = false;
            document.body.classList.remove("no-scroll");
        }
    }
});

export const {showContactForm, hideContactForm} = contactFormSlice.actions;
export default contactFormSlice.reducer;