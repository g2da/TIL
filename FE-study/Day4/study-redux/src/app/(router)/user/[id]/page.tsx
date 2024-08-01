"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RootState, AppDispatch } from "@/app/store";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
} from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUser } from "@/app/hooks";

interface UserPageProps {
  params: { id: string };
}

const UserPage = ({ params }: UserPageProps) => {
  const id = params.id;
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const {
    currentUser: user,
    loading,
    error,
  } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (id) {
      const fetchSingleUser = async () => {
        dispatch(fetchUserRequest());
        try {
          const data = await fetchUser(id);
          dispatch(fetchUserSuccess(data));
        } catch (err: any) {
          dispatch(fetchUserFailure(err.message));
        }
      };

      fetchSingleUser();
    }
  }, [dispatch, id]);

  const handleDelete = async () => {
    setDeleting(true);
    dispatch(deleteUserRequest());
    try {
      await deleteUser(id ?? "");
      dispatch(deleteUserSuccess(id ?? ""));
    } catch (err: any) {
      dispatch(deleteUserFailure(err.message));
    } finally {
      setDeleting(false);
      alert("삭제했습니다. 목록 페이지로 이동합니다.");
      router.push(`/user`);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data</div>;
  }

  return (
    <div className="user-detail">
      <h1>User Detail</h1>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <div className="actions">
        <button
          onClick={handleDelete}
          disabled={deleting}
          className={"btn-delete"}>
          Delete User
        </button>
        <Link href="/user" className={"link"}>
          Back to User List
        </Link>
      </div>
    </div>
  );
};

export default UserPage;
