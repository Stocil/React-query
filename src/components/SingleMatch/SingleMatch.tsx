import { useMatchQuery } from "../../hooks/useMatchQuery.ts";
import { CircularProgress, Stack, Typography } from "@mui/material";

type SingleMatchProps = {
  matchId: string;
};

const SingleMatch = ({ matchId }: SingleMatchProps) => {
  const { data, isLoading, isSuccess, status } = useMatchQuery(matchId);
  console.log(data, isLoading, isSuccess, status);

  return (
    <Stack mt={5} spacing={4} alignItems="center">
      {isLoading ? (
        <CircularProgress size={60} />
      ) : (
        <Typography variant="h5">Success!</Typography>
      )}

      <Typography variant="h5">7756271224</Typography>
    </Stack>
  );
};

export default SingleMatch;
