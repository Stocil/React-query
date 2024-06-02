import { FC } from "react";

import { CircularProgress, Container, Stack, Typography } from "@mui/material";

import SinglePost from "../SinglePost";
import { useGetPostQuery } from "../../hooks/useGetPostQuery.ts";

type SingleMatchProps = {
  userId: string;
};

const Posts: FC<SingleMatchProps> = ({ userId }) => {
  const { data, isLoading, isSuccess } = useGetPostQuery(userId);

  if (isLoading) return <CircularProgress sx={{ mt: 5 }} size={60} />;
  if (!isSuccess)
    return (
      <Typography
        variant="h5"
        sx={{ mt: 5 }}
        color={(theme) => theme.palette.error.light}>
        There seems to be an error, try again!
      </Typography>
    );

  return (
    <Container sx={{ mt: 5 }}>
      {data ? (
        data.length > 0 ? (
          <Stack spacing={4}>
            {data.map((post) => (
              <SinglePost key={post.id} post={post} />
            ))}
          </Stack>
        ) : (
          <Typography variant="h5">No posts were found</Typography>
        )
      ) : null}
    </Container>
  );
};

export default Posts;
