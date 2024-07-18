import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
}

export const fetcher = (url: string) => {
  return axios.get(url, { withCredentials: true }).then((res) => res.data);
};

export const useEditUser = () => {
  const editUser = async (data: User) => {
    const response = await axios.put("/api/user", data, {
      withCredentials: true,
    });
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data.message || "Failed to update user");
    }
    return response.data;
  };

  return { editUser };
};

export const useCreateUser = () => {
  const createUser = async (data: { name: string; email: string }) => {
    const response = await axios.post("/api/user", data, {
      withCredentials: true,
    });
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data.message || "Failed to create user");
    }
    return response.data;
  };

  return { createUser };
};

export const useDeleteUser = () => {
  const deleteUser = async (id: string) => {
    const response = await axios.delete(`/api/user?id=${id}`);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data.message || "Failed to delete user");
    }
    return response.data;
  };

  return { deleteUser };
};
