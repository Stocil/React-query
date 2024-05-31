import { useGetPostQuery } from "../../hooks/useGetPostQuery.ts";
import { CircularProgress, Container, Stack, Typography } from "@mui/material";

type SingleMatchProps = {
  title: string;
};

const Posts = ({ title }: SingleMatchProps) => {
  const { data, isLoading, isSuccess } = useGetPostQuery(title);
  console.log(data, isLoading, isSuccess);

  if (isLoading) return <CircularProgress sx={{ mt: 5 }} size={60} />;

  return (
    <Container sx={{ mt: 5 }}>
      <Stack spacing={4} alignItems="center">
        {isSuccess ? (
          <Typography variant="h5">Success!</Typography>
        ) : (
          <Typography variant="h5" color={(theme) => theme.palette.error.light}>
            There seems to be an error, try again!
          </Typography>
        )}
      </Stack>
    </Container>
  );
};

export default Posts;
