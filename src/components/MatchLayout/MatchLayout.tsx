import SearchBar from "../SearchBar";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce.ts";
import SingleMatch from "../SingleMatch";

const MatchLayout = () => {
  const [matchId, setMatchId] = useState("");
  const [debouncedMatchId] = useDebounce(matchId);

  return (
    <>
      <SearchBar matchId={matchId} onSetMatchId={setMatchId} />
      <SingleMatch matchId={debouncedMatchId} />
    </>
  );
};

export default MatchLayout;
