export class Movie {
  constructor({
    id,
    title,
    releaseDate,
    movieUrl,
    imageUrl,
    genres,
    description,
    runtime,
    rating,
  }) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.movieUrl = movieUrl;
    this.imageUrl = imageUrl;
    this.genres = genres;
    this.description = description;
    this.runtime = runtime;
    this.rating = rating;
  }
}