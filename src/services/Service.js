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
  },
  async getTenEasy() {
    const response = await API.get(
      ".php?amount=10&difficulty=easy&type=multiple"
    );
    return response.data;
  }
};
