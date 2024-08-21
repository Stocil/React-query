import { FC } from "react";

import { Avatar, Stack, Typography } from "@mui/material";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

import { SingleRepoType } from "../../types/repos.ts";
import {
  IconWithTextWrapper,
  SingleRepoWrapper,
} from "./SingleRepo.styled.tsx";

type SinglePostProps = {
  repoInfo: SingleRepoType;
};

const SingleRepo: FC<SinglePostProps> = ({ repoInfo }) => {
  return (
    <SingleRepoWrapper>
      <Stack spacing={1}>
        <IconWithTextWrapper>
          <BookOutlinedIcon fontSize={"small"} />

          <a href={repoInfo.html_url} target="_blank">
            <Typography variant="h6" color={"primary"}>
              {repoInfo.full_name}
            </Typography>
          </a>
        </IconWithTextWrapper>

        <Typography
          color={(theme) => theme.palette.typography.main}
          variant="body1">
          {repoInfo.description}
        </Typography>

        <Stack mt={1} direction="row" spacing={2}>
          <Typography
            color={(theme) => theme.palette.typography.main}
            variant="body1">
            {repoInfo.language}
          </Typography>

          <IconWithTextWrapper>
            <StarBorderOutlinedIcon fontSize={"small"} />

            <Typography variant="body1">{repoInfo.stargazers_count}</Typography>
          </IconWithTextWrapper>

          <IconWithTextWrapper>
            <AccountTreeOutlinedIcon fontSize={"small"} />

            <Typography variant="body1">
              Forks: {repoInfo.forks_count}
            </Typography>
          </IconWithTextWrapper>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1}>
        <a href={repoInfo.owner.html_url} target="_blank">
          <Typography color="primary" variant="body1">
            {repoInfo.owner.login}
          </Typography>
        </a>

        <Avatar src={repoInfo.owner.avatar_url} />
      </Stack>
    </SingleRepoWrapper>
  );
};

export default SingleRepo;
