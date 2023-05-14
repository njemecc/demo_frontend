"use client";
import { UserSettingsContext } from "@/context/UserSettingsContext";
import userSettingsReducer from "@/reducers/UserSettingsReducer";
import { User } from "@/types";
import { useReducer } from "react";

export const UserSettingsProvider = ({ children }: any) => {
  const initialUserSettings: User = {
    firstName: "Branislav",
    email: "branislannjemec@gmail.com",
    id: 1,
  };

  const [state, dispatch] = useReducer(
    userSettingsReducer,
    initialUserSettings
  );

  return (
    <UserSettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </UserSettingsContext.Provider>
  );
};
