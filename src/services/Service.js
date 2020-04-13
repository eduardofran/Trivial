import axios from "axios";

const API = axios.create({
  baseURL: "https://opentdb.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  async getToken() {
    const response = await API.get("");
    return response.data;
  }
};
