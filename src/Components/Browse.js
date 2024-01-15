import Header from "./Header";
import SecondaryConatiner from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryConatiner />
        </>
      )}
    </div>
  );
};

export default Browse;
