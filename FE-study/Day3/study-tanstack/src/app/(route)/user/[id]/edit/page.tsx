"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useEditUserMutation } from "@/app/hooks/mutations/useEditUserMutation";
import { useFetchUser } from "@/app/hooks/queries/useFetchUser";

const EditUserPage = () => {
  const pathname = usePathname();
  const id = pathname?.split("/")[2];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { data: user, isLoading, error } = useFetchUser(id ?? "");
  const mutation = useEditUserMutation(id);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ id: id ?? "", name, email });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
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
