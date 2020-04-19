const APIURL = "http://localhost:3000";
const axios = require("axios");
export const getContacts = () => axios.get(`${APIURL}/contacts`);
export const addContact = data => axios.post(`${APIURL}/contacts`, data);
export const editContact = data =>
  axios.put(`${APIURL}/contacts/${data.id}`, data);
export const deleteContact = id => axios.delete(`${APIURL}/contacts/${id}`);
