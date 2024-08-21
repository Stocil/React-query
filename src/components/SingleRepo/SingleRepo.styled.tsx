import { Paper, Stack, styled } from "@mui/material";

export const SingleRepoWrapper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "space-between",
  textAlign: "start",
}));

export const IconWithTextWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(0.5),
  alignItems: "center",
}));
