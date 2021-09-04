import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:3001";

const api = {
  get: () => axios.get(baseUrl),
  add: (data) => {
      console.log(data);
      axios.post(data)
  },
  delete: () => axios.delete(baseUrl),
};

export default api;
