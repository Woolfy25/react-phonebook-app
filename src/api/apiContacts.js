import axios from "axios";

axios.defaults.url = "https://connections-api.goit.global/";

const resourceApi = (resource) => {
  return {
    getAll: () => axios.get(`${resource}`),
    create: (data) => axios.post(`${resource}`, data),
    delete: (id) => axios.delete(`${resource}/${id}`),
  };
};

const contactsApi = resourceApi("contacts");

export { contactsApi };
