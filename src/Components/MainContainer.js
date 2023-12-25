import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  console.log(movies)
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>; 
  }
  
  const mainMovie = movies[0];
  

  const { original_title, overview } = mainMovie;

  return (
    <div className="pt-[30%] md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};
export default MainContainer;