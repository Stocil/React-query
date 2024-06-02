import { useQuery } from "@tanstack/react-query";

import { BASE_URL } from "../constants";
import { PostsType } from "../types/posts.ts";

export const useGetPostQuery = (userId: string) => {
  const fetchPosts = async (): Promise<PostsType> => {
    const response = await fetch(
      BASE_URL + `/posts` + `${userId ? `?userId=${userId}` : ""}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["posts", userId],
    queryFn: fetchPosts,
    retry: 1,
    retryDelay: 2000,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isSuccess };
};
