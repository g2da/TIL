import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/app/hooks";

export const useFetchUser = (id: string) => {
  return useQuery({
    queryKey: ["Users", id],
    queryFn: () => fetcher(`/api/user?id=${id}`),
  });
};
