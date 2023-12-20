import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./moviesSlice";

const appStore=configureStore({
    reducer:{
        user:userReducer,
    }
})

export default appStore;