import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import  addTodoReducer from "./reducer";
import { persistReducer, persistStore  } from 'redux-persist';
import thunk from 'redux-thunk';
import {combineReducers} from "redux";

const reducers = combineReducers({
  todos: addTodoReducer
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});


let persistor = persistStore(store);

export { store, persistor };