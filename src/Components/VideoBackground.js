import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";

const VideoBackground = () => {
  const dispatch =useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/695721/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.lenght ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer))
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
