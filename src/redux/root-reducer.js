import { combineReducers } from "@reduxjs/toolkit";
import contactsSlice from "./contacts/contactsSlice";
import filtersSlice from "./filters/filtersSlice";

const rootReducer = combineReducers({
  contacts: contactsSlice,
  filter: filtersSlice,
});

export default rootReducer;
