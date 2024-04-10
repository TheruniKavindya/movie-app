import React from "react";
import { useSelector } from "react-redux";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";

export default function MovieDetails() {
  const { id } = useSelector((state) => state.movieDetails);
  console.log(id);

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    fetcher
  );

  console.log(data);
  return (
    <div className="flex flex-col w-full h-full py-28 px-10 bg-movieClub-bg-primary">
      <p className="text-xl font-montserrat-regular text-movieClub-white my-3">
        {data.title}
      </p>
      <div className="grid grid-cols-12 gap-10 font-montserrat-regular">
        <div className="col-span-5">
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            className="w-[40vw] h-[80vh]"
          />
        </div>
        <div className="col-span-7 flex flex-col gap-y-4">
          <p className="text-movieClub-white font-montserrat-regular">
            {data.original_title}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            {data.overview}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Runtime: {parseFloat((data.runtime / 60).toFixed(2))} h
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Language: {data.original_language}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Status: {data.status}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Released Date: {data.release_date}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Popularity: {data.popularity}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Votes average: {data.vote_average}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Vote count: {data.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
