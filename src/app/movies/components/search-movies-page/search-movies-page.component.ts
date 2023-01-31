import {Component, inject} from "@angular/core";
import {SearchMoviesBoxComponent} from "../search-movies-box/search-movies-box.component";
import {Movie} from "../../models/movie";
import {MoviesService} from "../../services/movies.service";
import {MoviesListComponent} from "../movies-list/movies-list.component";

@Component({
  standalone: true,
  selector: 'app-search-movies-page',
  templateUrl: './search-movies-page.component.html',
  imports: [
    SearchMoviesBoxComponent,
    MoviesListComponent
  ],
})
export class SearchMoviesPageComponent {
  private readonly moviesService = inject(MoviesService);
  movies: Movie[] = [];

  onSearch(searchTerm: string): void {
    this.moviesService.findMovies(searchTerm)
      .subscribe(movies => {
        this.movies = movies;
      });
  }

  onFavoriteMovie(movie: Movie): void {
    // TODO
  }
}
