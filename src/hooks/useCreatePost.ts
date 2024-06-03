import { BASE_URL } from "../constants";
import { CreatePostPropsType, SinglePostType } from "../types/posts.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  const createPost = async (
    post: CreatePostPropsType
  ): Promise<SinglePostType> => {
    const response = await fetch(BASE_URL + `/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
