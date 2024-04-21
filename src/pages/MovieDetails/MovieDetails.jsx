import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function MovieDetails() {
  const { id } = useSelector((state) => state.movieDetails);

  const [details, setDetails] = useState();
  console.log(id);

  // const { data } = useSWR(
  //   `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
  //   fetcher
  // );

  useEffect(() => {
    (async () => {
      await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            console.log(res);
            setDetails(res);
          }
        });
    })();
  }, [id]);

  // console.log(data);
  console.log(details);

  return (
    <div className="flex flex-col w-full h-full py-28 px-10 bg-movieClub-bg-primary">
      <p className="text-xl font-montserrat-regular text-movieClub-white my-3">
        {details.title}
      </p>
      <div className="grid grid-cols-12 gap-10 font-montserrat-regular">
        <div className="col-span-5">
          <img
            src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
            className="w-[40vw] h-[80vh]"
          />
        </div>
        <div className="col-span-7 flex flex-col gap-y-4">
          <p className="text-movieClub-white font-montserrat-regular">
            {details.original_title}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            {details.overview}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Runtime: {parseFloat((details.runtime / 60).toFixed(2))} h
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Language: {details.original_language}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Status: {details.status}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Released Date: {details.release_date}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Popularity: {details.popularity}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Votes average: {details.vote_average}
          </p>
          <p className="text-movieClub-white font-montserrat-regular">
            Vote count: {details.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
