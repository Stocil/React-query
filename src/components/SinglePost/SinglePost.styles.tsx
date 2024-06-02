import { Stack, styled } from "@mui/material";

export const SinglePostWrapper = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(3),
  padding: theme.spacing(2),
  textAlign: "start",
  alignItems: "start",
  color: theme.palette.typography.main,
}));
