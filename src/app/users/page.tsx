"use client";
import { UserSettingsContext } from "@/context/UserSettingsContext";
import { usersRequest } from "@/data";
import { useGetUsers } from "@/hooks/useGetUsers";
import { User } from "@/types";
import React, { useContext } from "react";
import { useState, useEffect } from "react";

const UsersPage = () => {
  const users: User[] | any = useGetUsers();

  const context = useContext(UserSettingsContext);

  console.log(users);

  return (
    <>
      <h1>Users page</h1>
      {users.data?.map((user: User) => (
        <h1>{context?.state.email}</h1>
      ))}
    </>
  );
};

export default UsersPage;
