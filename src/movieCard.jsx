const MovieCard = ({ movie }) => {
  console.log("🚀 ~ MovieCard ~ movie:", movie);
  return (
    <div key={movie.imdbID} className="w-[303px]">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/400"}
        alt={movie.Title}
      />
      <div className="px-4 py-2 bg-gray-700">
        <h3 className="text-white">{movie.Type}</h3>
        <h3 className="text-white">{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
