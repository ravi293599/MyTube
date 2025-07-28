import { createSlice } from "@reduxjs/toolkit"

const AppSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        handleMenu: (state,action)=>{
            state.isMenuOpen = action.payload;
        }
    }
})
export const{toggleMenu,handleMenu} = AppSlice.actions;
export default AppSlice.reducer;