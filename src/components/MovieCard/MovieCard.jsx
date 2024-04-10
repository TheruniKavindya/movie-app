import React from "react";

/**
 *
 * @typedef {object} MovieCardProps
 * @property {string} title - title of the movie
 * @property {string} imageUrl - image poster of the movie
 * @property {number} rating - rating of the movie
 * @property {number} year - year of the release
 * @property {function} onClickHandler - onClick image card
 *
 */

/**
 *
 * @param {MovieCardProps} MovieCard - props
 * @returns {React.ReactElement}
 */
function MovieCard({ title, imageUrl, rating, year, onClickHandler }) {
  return (
    <div
      onClick={onClickHandler}
      className="w-full md:w-[40vw] lg:w-[20vw] h-[60vh] shadow-2xl bg-movieClub-white rounded-md cursor-pointer "
    >
      <p className="font-montserrat-semi-bold text-xl flex justify-items-start text-movieClub-blue max-h-16 p-5">
        {title}
      </p>
      <div className="flex justify-center pt-2 min-h-[40vh]">
        <img src={imageUrl} alt={title} className="w-full" height={"100%"} />
      </div>

      <p className="font-montserrat-regular text-md flex justify-items-start pl-5  mt-5">
        Rating: {`${rating}/5`}
      </p>
      <p className="font-montserrat-regular text-xs flex justify-items-start pl-5">
        {year}
      </p>
    </div>
  );
}

export default MovieCard;
