import { useState } from "react";

import SearchBar from "../SearchBar";
import Posts from "../Posts";
import { useDebounce } from "../../hooks/useDebounce.ts";

const PostsLayout = () => {
  const [title, setTitle] = useState("");
  const [debouncedMatchId] = useDebounce(title);

  return (
    <>
      <SearchBar title={title} onSetTitle={setTitle} />
      <Posts title={debouncedMatchId} />
    </>
  );
};

export default PostsLayout;
