// import { configureStore } from "@reduxjs/toolkit";
// import productsReducers from "./Slices/ProductSlice"
// import categoriesReducers from "./Slices/CategoriesSlice"


// export const store=configureStore({
//     reducer:{
//     products:productsReducers,
//     categories:categoriesReducers
//     },
// })



// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import productsReducers from "./Slices/ProductSlice";
import categoriesReducers from "./Slices/CategoriesSlice";
import { combineReducers } from "redux";
import cartReducer from "./Slices/CartSlice"
import authReducer from "./Slices/authSlice"
// 1️⃣ Combine reducers
const rootReducer = combineReducers({
  products: productsReducers,
  categories: categoriesReducers,
  cart:cartReducer,
  auth:authReducer
});

// 2️⃣ Persist config
const persistConfig = {
  key: "root",
  storage,
};

// 3️⃣ Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4️⃣ Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

// 5️⃣ Create persistor
export const persistor = persistStore(store);
