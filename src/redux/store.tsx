import { rootReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({reducer: rootReducer});

export default Store;

