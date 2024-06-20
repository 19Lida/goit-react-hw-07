// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: [],
//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => {
//         state.push(payload);
//       },
//       prepare: (data) => {
//         return {
//           payload: {
//             id: nanoid(),
//             ...data,
//           },
//         };
//       },
//     },
//     deleteContact: (state, { payload }) =>
//       state.filter(({ id }) => id != payload),
//   },
// });
// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts } from "./contactsOps";
// import { fetchContacts } from "./contactsOps";
import {
  fetchContacts,
  fetchAddContacts,
  fetchDeleteContacts,
} from "./contactsOps";
const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(fetchAddContacts.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchAddContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContacts.rejected, (store, { payload }) => {})
      .addCase(fetchDeleteContacts.pending, (store) => {
        store.loading = true;
      })
      .addCase(fetchDeleteContacts.fulfilled, (store, { payload }) => {
        store.loading = false;
        const index = store.items.findIndex((item) => item.id === payload);
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContacts.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});
export default contactsSlice;
