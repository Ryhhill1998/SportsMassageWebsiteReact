import { createSlice } from '@reduxjs/toolkit';

export const dropdownSearchSlice = createSlice({
    name: 'dropdownSearch',
    initialState: {
        visible: false
    },
    reducers: {
        hideDropdownSearch: state => {
            state.visible = false;
        },
        toggleDropdownSearch: state => {
            state.visible = !state.visible;
        }
    }
});

export const { hideDropdownSearch, toggleDropdownSearch } = dropdownSearchSlice.actions;

export default dropdownSearchSlice.reducer;