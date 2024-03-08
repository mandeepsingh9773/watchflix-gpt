import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // console.log(movies)
  if (!movies || movies.length === 0) {
    return (
      <div className="w-full h-[100vh] bg-black flex justify-center items-center">
        <div className="py-24">
          <p className="text-2xl text-white">Loading...</p>
        </div>
      </div>
    );
  }

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[25%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
