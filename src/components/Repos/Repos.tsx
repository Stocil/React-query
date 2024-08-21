import { FC } from "react";

import {
  CircularProgress,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useFetchPosts } from "../../hooks/useFetchPosts.ts";
import SingleRepo from "../SingleRepo";

type ReposProps = {
  currentPage: number;
  handleChangePage: (page: number) => void;
  langName: string;
};

const Repos: FC<ReposProps> = ({ currentPage, handleChangePage, langName }) => {
  const { data, isLoading, isSuccess } = useFetchPosts(langName, currentPage);

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
      <Stack alignItems="center" spacing={3}>
        {data?.items ? (
          data.items.length > 0 ? (
            <Stack spacing={4}>
              {data.items.map((repo) => (
                <SingleRepo key={repo.id} repoInfo={repo} />
              ))}
            </Stack>
          ) : (
            <Typography variant="h5">No repos were found</Typography>
          )
        ) : null}

        {!isLoading && (
          <Pagination
            disabled={isLoading}
            count={50}
            page={+currentPage}
            color="primary"
            size={"medium"}
            onChange={(_, page) => handleChangePage(page)}
          />
        )}
      </Stack>
    </Container>
  );
};

export default Repos;
