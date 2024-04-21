import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import MovieCard from "../../components/MovieCard/MovieCard";
import { setId } from "../../reducers/movieDetailsSlice";
import fetcher from "../../utils/fetcher";

export default function Landing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_APP_ACCESS_TOKEN}`,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setPopularMovies(res.results);
          }
        });
    })();
  }, []);

  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    fetcher
  );

  // console.log(data, error, isLoading);

  return (
    <div className="flex flex-col w-full h-full py-28 px-10 bg-movieClub-bg-primary">
      <p className="text-xl font-montserrat-regular text-movieClub-white my-3">
        Most Rated
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-y-10 flex-wrap">
        {/* {data.results.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={4}
            year={new Date(movie.release_date).getFullYear()}
            imageUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            onClickHandler={() => {
              dispatch(setId(movie.id));
              navigate("/details");
            }}
          />
        ))} */}
      </div>

      <p className="text-xl font-montserrat-regular text-movieClub-white mt-32 mb-3">
        Most Popular
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-y-10 flex-wrap">
        {popularMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={4}
            year={new Date(movie.release_date).getFullYear()}
            imageUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            onClickHandler={() => {
              // dispatch(setId(movie.id));
              navigate(`/details/${movie.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
