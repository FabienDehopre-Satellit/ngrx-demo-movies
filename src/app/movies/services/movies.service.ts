import {inject, Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Movie} from "../models/movie";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private readonly http = inject(HttpClient);
  findMovies(searchTerm?: string): Observable<Movie[]> {
    let params = new HttpParams();
    if (searchTerm && searchTerm.trim() !== '') {
      params = params.set('q', searchTerm);
    }

    return this.http.get<Movie[]>('http://localhost:3000/movies', { params });
  }

  markAsFavorite(movie: Movie): Observable<Movie> {
    return this.http.patch<Movie>(`http://localhost:3000/movies/${movie.id}`, { favorite: true });
  }
}
