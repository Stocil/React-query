import { Container, TextField } from "@mui/material";

type SearchBarProps = {
  title: string;
  onSetTitle: (id: string) => void;
};

const SearchBar = ({ title, onSetTitle }: SearchBarProps) => {
  return (
    <Container sx={{ mt: 10 }}>
      <TextField
        label="Enter title of post"
        autoComplete="off"
        fullWidth
        value={title}
        onChange={(e) => onSetTitle(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
