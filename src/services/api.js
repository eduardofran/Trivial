import axios from "axios";

const API = axios.create({
  baseURL: "https://opentdb.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  async getTenEasy() {
    const response = await API.get(
      "/api.php?amount=10&difficulty=easy&type=boolean"
    );
    return response.data.results;
  }
};
