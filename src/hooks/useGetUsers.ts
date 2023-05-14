import { usersRequest } from "@/data";
import { SWR_KEYS } from "@/data/swrKeys";
import useSWR from "swr";

export const useGetUsers = () => {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    () => {
      return SWR_KEYS.USERS_GET_ALL;
    },
    () => {
      usersRequest.all();
    },
    {
      refreshInterval: 90000,
      revalidateOnFocus: false,
      revalidateOn: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );

  return { data, error };
};
