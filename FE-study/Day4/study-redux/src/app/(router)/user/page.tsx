"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  createUserRequest,
  createUserSuccess,
  createUserFailure,
} from "@/app/store";
import CreateUserPage from "./create/page";
import { createUser, fetchAllUsers } from "@/app/hooks";
import { AppDispatch, RootState } from "@/app/store/store";

const UsersPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(fetchUsersRequest());
      try {
        const response = await fetchAllUsers();
        dispatch(fetchUsersSuccess(response.data));
      } catch (err: any) {
        dispatch(fetchUsersFailure(err.message));
      }
    };

    fetchUsers();
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCreateUser = async (name: string, email: string) => {
    dispatch(createUserRequest());
    try {
      const response = await createUser({ name, email });
      dispatch(createUserSuccess(response.data));
    } catch (err: any) {
      dispatch(createUserFailure(err.message));
    }
  };

  return (
    <div>
      <h1>Users List</h1>
      <ul className="file-list">
        {users.map((user: any) => (
          <li key={user.id}>
            <span className="user-name">{user.name}</span>
            <Link href={`/user/${user.id}`}>상세</Link>
            <Link href={`/user/${user.id}/edit`}>수정</Link>
          </li>
        ))}
      </ul>
      <CreateUserPage onCreateUser={handleCreateUser} />
    </div>
  );
};

export default UsersPage;
