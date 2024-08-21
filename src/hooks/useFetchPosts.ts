import { useQuery } from "@tanstack/react-query";

import { BASE_URL } from "../constants";
import { ReposResponseType } from "../types/repos.ts";

export const useFetchPosts = (langName: string, page: number) => {
  const fetchPosts = async (): Promise<ReposResponseType> => {
    const response = await fetch(
      BASE_URL +
        `?q=language:${langName || "TypeScript"}&per_page=20&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  return useQuery({
    queryKey: ["posts", langName, page],
    queryFn: fetchPosts,
    retry: 1,
    retryDelay: 2000,
    refetchOnWindowFocus: false,
    // placeholderData: keepPreviousData,
  });
};
