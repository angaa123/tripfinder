import React from "react";
import SearchInput from "./SearchInput";

const SearchBar: React.FC = () => {
  return (
    <>
      <div className="flex-2 flex flex-row gap-2">
        <SearchInput labelName="From" />
        <SearchInput labelName="To" />
      </div>
      <div className="flex-2 flex flex-row gap-2 px-2">
        <SearchInput labelName="Start date" />
        <SearchInput labelName="End date" />
      </div>
      <div className="flex-1 px-2">
        <SearchInput labelName="Budget" />
      </div>
      <button className="flex-1 text-white bg-green-400 rounded-3xl font-bold">
        Search
      </button>
    </>
  );
};

export default SearchBar;
