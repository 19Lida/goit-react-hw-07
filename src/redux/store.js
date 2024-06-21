import { configureStore, createStore } from "@reduxjs/toolkit";
// import persistedReducer from "./root-reducer";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import rootReducer from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer,

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

console.log(store, "STOOOOOOOOREEEEEEEEEE");
// export let persistor = persistStore(store);
export default store;
