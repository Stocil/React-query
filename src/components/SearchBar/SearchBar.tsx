import { FC } from "react";

import { Container, Stack, TextField, Typography } from "@mui/material";

type SearchBarProps = {
  langName: string;
  handleChangeLangName: (id: string) => void;
  handleChangePage: (page: number) => void;
};

const SearchBar: FC<SearchBarProps> = ({
  langName,
  handleChangeLangName,
  handleChangePage,
}) => {
  return (
    <Container sx={{ mt: 10 }}>
      <Stack alignItems="start" spacing={5}>
        <Typography
          variant="body1"
          color={(theme) => theme.palette.typography.main}>
          Write the name of the language to get a list of the most popular
          repositories
        </Typography>

        <TextField
          label="Enter language name"
          autoComplete="off"
          fullWidth
          value={langName}
          onChange={(e) => {
            handleChangeLangName(e.target.value);
            handleChangePage(1);
          }}
        />
      </Stack>
    </Container>
  );
};

export default SearchBar;
