"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useEditUser, useUser } from "@/hooks";

const EditUserPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const id = pathname?.split("/")[2];

  const { user, error: fetchError, loading } = useUser(id);
  const { editUser } = useEditUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await editUser({ id: id ?? "", name, email });
      alert("수정했습니다. 상세 페이지로 이동합니다.");
      router.push(`/user/${id}`);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to update user"
      );
    }
  };

  if (error || fetchError) {
    return <div>Error: {error || fetchError}</div>;
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
