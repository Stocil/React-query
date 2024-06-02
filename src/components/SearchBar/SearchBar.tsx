import { FC } from "react";

import { Container, TextField } from "@mui/material";

type SearchBarProps = {
  userId: string;
  onSetTitle: (id: string) => void;
};

const SearchBar: FC<SearchBarProps> = ({ userId, onSetTitle }) => {
  return (
    <Container sx={{ mt: 10 }}>
      <TextField
        label="Enter user id"
        autoComplete="off"
        fullWidth
        value={userId}
        onChange={(e) => onSetTitle(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
