import { Container, IconButton, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

type SearchBarProps = {
  matchId: string;
  onSetMatchId: (id: string) => void;
};

const SearchBar = ({ matchId, onSetMatchId }: SearchBarProps) => {
  return (
    <Container sx={{ mt: 10 }}>
      <TextField
        label="Enter match id"
        autoComplete="off"
        fullWidth
        value={matchId}
        onChange={(e) => onSetMatchId(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SendIcon color="primary" />
            </IconButton>
          ),
        }}
      />
    </Container>
  );
};

export default SearchBar;
