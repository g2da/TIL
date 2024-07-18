"use client";

import Link from "next/link";
import { useUsers } from "@/hooks";

const UsersPage = () => {
  const { users, error, loading } = useUsers();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users List</h1>
      <ul className="file-list">
        {users.length ? (
          users.map((user) => (
            <li key={user.id}>
              <span className="user-name">{user.name}</span>
              <Link href={`/user/${user.id}`}>상세</Link>
              <Link href={`/user/${user.id}/edit`}>수정</Link>
            </li>
          ))
        ) : (
          <div className="container">
            <div className="no-data">No data</div>
            <span className="message">데이터가 없습니다 추가해주세요</span>
            <div className="button-container">
              <a href="/user/create" className="link">
                <button className="add-user-button">User 추가하기</button>
              </a>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default UsersPage;
