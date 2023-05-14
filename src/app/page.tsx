import { UserSettingsProvider } from "@/providers/UserSettingsProviders";
import React from "react";
import UsersPage from "./users/page";
import CreateUserPage from "./usersCreatePage/page";

const HomePage = () => {
  return (
    <div>
      <UserSettingsProvider>
        <UsersPage />
        <CreateUserPage />
      </UserSettingsProvider>
    </div>
  );
};

export default HomePage;
