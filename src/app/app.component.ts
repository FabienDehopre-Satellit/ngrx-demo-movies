import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {SearchMoviesBoxComponent} from "./movies/components/search-movies-box/search-movies-box.component";
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    imports: [
        MatToolbarModule,
        SearchMoviesBoxComponent,
        RouterOutlet,

    ],
})
export class AppComponent {

}
