import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { RacletteComponent } from './raclette/raclette.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { MovieListComponent } from './movie-list/movie-list.component';
import { DisplayMovieDirective } from './display-movie.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserProfilComponent,
    RacletteComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    MovieListComponent,
    DisplayMovieDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
