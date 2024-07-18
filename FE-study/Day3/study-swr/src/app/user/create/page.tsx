"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCreateUser } from "@/hooks";

const CreateUserPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { createUser } = useCreateUser();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await createUser({ name, email });
      alert("생성했습니다. Users List 페이지로 이동합니다.");
      router.push("/user");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to create user"
      );
    }
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
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CreateUserPage;
