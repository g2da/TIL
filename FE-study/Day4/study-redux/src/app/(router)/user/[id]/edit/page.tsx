"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/store/store";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  editUserRequest,
  editUserSuccess,
  editUserFailure,
} from "@/app/store";
import { editUser, fetchUser } from "@/app/hooks";

interface EditUserPageProps {
  params: { id: string };
}

const EditUserPage = ({ params }: EditUserPageProps) => {
  const id = params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(editUserRequest());
    try {
      const data = await editUser({ id: id ?? "", name: name, email: email });
      dispatch(editUserSuccess(data));
      alert("수정했습니다. 상세 페이지로 이동합니다.");
      router.push(`/user/${id}`);
    } catch (err: any) {
      dispatch(editUserFailure(err.message));
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="form-container">
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" className="submit">
          Update User
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default EditUserPage;
