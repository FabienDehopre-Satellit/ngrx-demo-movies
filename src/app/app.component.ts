import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {SearchMoviesBoxComponent} from "./search-movies-box/search-movies-box.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    MatToolbarModule,
    SearchMoviesBoxComponent,

  ],
})
export class AppComponent {

}
