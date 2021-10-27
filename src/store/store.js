import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./actions";


export default function() {
    return configureStore({ reducer: rootReducer });
};