import api from "./axios";

export const registerUser = (data) => {
  return api.post("/register/", data);
};

export const loginUser = (credentials) => {
  return api.post("/token/", credentials);
};