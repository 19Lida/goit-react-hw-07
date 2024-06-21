export const selectContacts = (store) => {
  return store.contacts;
};

export const selectNameFilter = ({ filter }) => filter;
