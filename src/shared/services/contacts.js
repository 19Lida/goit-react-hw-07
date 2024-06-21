import axios from "axios";
const contactsInstance = axios.create({
  baseURL: "https://6673c95475872d0e0a93a7e0.mockapi.io/contacts",
});
export const getAllContacts = async () => {
  const { data } = await contactsInstance.get("/");

  console.log("GEEEEETTTTTTTTTT");

  return data;
};
export const addaContacts = async (data) => {
  const { data: result } = await contactsInstance.post("/", data);
  return result;
};
