import Header from "./Header";
import SecondaryConatiner from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryConatiner />
    </div>
  )
};

export default Browse;
