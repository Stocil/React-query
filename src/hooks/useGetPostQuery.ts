import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants";

export const useGetPostQuery = (matchId: string) => {
  return useQuery({
    queryKey: ["posts", matchId],
    queryFn: async () => {
      const response = await fetch(BASE_URL + `/posts`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
    retry: 1,
    retryDelay: 2000,
    refetchOnWindowFocus: false,
  });
};
