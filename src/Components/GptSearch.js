import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../Utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img
      className="absolute -z-10"
        src={BG_URL}
        alt="bgphoto"
      />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
