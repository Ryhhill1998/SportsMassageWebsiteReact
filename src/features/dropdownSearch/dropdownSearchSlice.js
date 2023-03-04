import { createSlice } from '@reduxjs/toolkit';

export const dropdownSearchSlice = createSlice({
    name: 'counter',
    initialState: {
        visible: false
    },
    reducers: {
        showDropdownSearch: state => {
            state.visible = true;
        },
        hideDropdownSearch: state => {
            state.visible = false;
        },
        toggleDropdownSearch: state => {
            state.visible = !state.visible;
        }
    }
});

export const { showDropdownSearch, hideDropdownSearch, toggleDropdownSearch } = dropdownSearchSlice.actions;

export default dropdownSearchSlice.reducer;