import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/app/hooks";

export const useFetchAllUsers = () => {
  return useQuery({
    queryKey: ["Users"],
    queryFn: () => fetcher("/api/user"),
  });
};
