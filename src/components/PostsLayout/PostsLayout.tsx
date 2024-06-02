import { FC, useState } from "react";

import SearchBar from "../SearchBar";
import Posts from "../Posts";
import { useDebounce } from "../../hooks/useDebounce.ts";

const PostsLayout: FC = () => {
  const [userId, setUserId] = useState("");
  const [debouncedMatchId] = useDebounce(userId);

  return (
    <>
      <SearchBar userId={userId} onSetTitle={setUserId} />
      <Posts userId={debouncedMatchId} />
    </>
  );
};

export default PostsLayout;
