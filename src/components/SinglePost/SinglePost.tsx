import { FC } from "react";

import { Paper, Typography } from "@mui/material";

import { SinglePostType } from "../../types/posts.ts";
import { getCapitalizedString } from "../../utils/getCapitalizedString.ts";
import { SinglePostWrapper } from "./SinglePost.styles.tsx";

type SinglePostProps = {
  post: SinglePostType;
};

const SinglePost: FC<SinglePostProps> = ({ post }) => {
  return (
    <Paper>
      <SinglePostWrapper>
        <Typography variant="h5">{getCapitalizedString(post.title)}</Typography>
        <Typography variant="body1">{post.body}</Typography>
      </SinglePostWrapper>
    </Paper>
  );
};

export default SinglePost;
