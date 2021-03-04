export class MovieEntity {
  constructor({
    id,
    title,
    releaseDate,
    movieUrl,
    imageUrl,
    genres,
    description,
    runtime,
  }) {
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.movieUrl = movieUrl;
    this.imageUtl = imageUrl;
    this.genres = genres;
    this.description = description;
    this.runtime = runtime;
  }
}
