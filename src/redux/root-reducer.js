import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import contactsSlice from "./contacts/contactsSlice";
import filtersSlice from "./filters/filtersSlice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filtersSlice,
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["filter"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
