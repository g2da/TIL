"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useDeleteUser, useUser } from "@/hooks";

interface User {
  id: string;
  name: string;
  email: string;
}

const UserPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const id = pathname?.split("/")[2];

  const { user, error: fetchError, loading } = useUser(id);
  const { deleteUser } = useDeleteUser();

  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteUser(id ?? "");
      alert("삭제했습니다. 목록 페이지로 이동합니다.");
      router.push(`/user`);
      setDeleting(false);
    } catch (error) {
      error instanceof Error ? error.message : "Failed to delete user";
      setDeleting(false);
    }
  };

  if (error || fetchError) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-detail">
      <h1>User Detail</h1>
      <p>
        <strong>ID:</strong> {user?.id}
      </p>
      <p>
        <strong>Name:</strong> {user?.name}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
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
