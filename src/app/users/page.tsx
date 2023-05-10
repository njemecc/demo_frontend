"use client";
import { usersRequest } from "@/data";
import { useGetUsers } from "@/hooks/useGetUsers";
import { User } from "@/types";
import React from "react";
import { useState, useEffect } from "react";

const UsersPage = () => {
  const users: User[] | any = useGetUsers();

  console.log(users);

  return (
    <>
      <h1>Users page</h1>
      {users.data?.map((user: User) => (
        <h1 key={user.id}>{user.email}</h1>
      ))}
    </>
  );
};

export default UsersPage;
