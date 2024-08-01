import { User } from "@/app/store";
import axios from "axios";

export const fetchUser = async (id: string) => {
  const response = await axios.get(`/api/user?id=${id}`);
  return response.data;
};
export const fetchAllUsers = () => axios.get("/api/user");

export const createUser = (user: { name: string; email: string }) =>
  axios.post("/api/user", user);

export const editUser = async (data: User) => {
  const response = await axios.put(`/api/user`, data);
  return response.data;
};

export const deleteUser = (id: string) => axios.delete(`/api/user?id=${id}`);
