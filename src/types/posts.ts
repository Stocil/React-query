export type SinglePostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsType = SinglePostType[];

export type CreatePostPropsType = Omit<SinglePostType, "id">;
