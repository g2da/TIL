"use client";

import { useState } from "react";
import { useCreateUserMutation } from "@/app/hooks/mutations/useCreateUserMutation";

const CreateUserPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const mutation = useCreateUserMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, email });
  };

  return (
    <div className="form-container">
      <h1>Create User</h1>
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
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUserPage;
