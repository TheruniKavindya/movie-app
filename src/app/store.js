import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import addMovieSlice from "../reducers/addMovieSlice";
import movieDetailsSlice from "../reducers/movieDetailsSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  addMovie: addMovieSlice,
  movieDetails: movieDetailsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persister = persistStore(store);

export default store;
