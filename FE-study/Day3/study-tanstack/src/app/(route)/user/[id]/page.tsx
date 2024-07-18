"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useDeleteUserMutation } from "@/app/hooks/mutations/useDeleteUserMutation";
import { useFetchUser } from "@/app/hooks/queries/useFetchUser";

const UserPage = () => {
  const pathname = usePathname();
  const id = pathname?.split("/")[2];
  const [deleting, setDeleting] = useState(false);

  const { data: user, isLoading, error: fetchError } = useFetchUser(id ?? "");
  const mutation = useDeleteUserMutation();

  const handleDelete = async () => {
    setDeleting(true);
    mutation.mutate(id ?? "");
  };

  if (fetchError) {
    return <div>Error: {fetchError.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
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
