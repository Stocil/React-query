import { FC, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce.ts";
import Repos from "../Repos";
import SearchBar from "../SearchBar";

const ReposLayout: FC = () => {
  const [langName, setLangName] = useState("TypeScript");
  const [debouncedLangName] = useDebounce(langName);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <SearchBar
        langName={langName}
        handleChangeLangName={setLangName}
        handleChangePage={setCurrentPage}
      />
      <Repos
        langName={debouncedLangName}
        currentPage={currentPage}
        handleChangePage={setCurrentPage}
      />
    </>
  );
};

export default ReposLayout;
