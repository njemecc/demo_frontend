import { getDemo } from "./http-client";
import { User } from "../types/index";
import { API_ENDPOINTS } from "../data/endpoints";
import { QueryOptions, CreateUserQuery } from "../types/index";

export const usersRequest = {
  all: ({ ...query }: QueryOptions = {}) =>
    getDemo<User>(API_ENDPOINTS.USERS_GET_ALL, {
      ...query,
    }),
  create: ({ ...query }: CreateUserQuery) =>
    getDemo<User>(API_ENDPOINTS.USERS_CREATE, {
      ...query,
    }),
};
