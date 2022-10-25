import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

showMovies: boolean = true;

movieList: string[] = ["L'école des sorciers", "La chambre des secrets", "Matrix"];

}
