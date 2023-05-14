import { Dispatch } from "react";

export interface User {
  id: number;
  firstName: string;
  email: string;
}

export interface QueryOptions {
  pageIndex?: number;
  rowNumber?: number;
}

export interface CreateUserQuery {
  firstName: string;
  email: string;
}

export interface UserSettingsContextProps {
  state: User;
  dispatch: Dispatch<UserSettingsAction>;
}

export interface UserSettingsAction {
  type: UserSettingsFunctions;
  payload: {
    email?: string;
    firstName?: string;
  };
}

export enum UserSettingsFunctions {
  CHANGE_EMAIL = "CHANGE_EMAIL",
  CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME",
}
