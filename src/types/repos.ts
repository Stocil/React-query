export type RepoOwnerType = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

export type SingleRepoType = {
  id: number;
  full_name: string;
  owner: RepoOwnerType;
  description: string;
  html_url: string;
  stargazers_count: string;
  language: string;
  forks_count: string;
};

export type ReposResponseType = {
  total_count: number;
  items: SingleRepoType[];
};
