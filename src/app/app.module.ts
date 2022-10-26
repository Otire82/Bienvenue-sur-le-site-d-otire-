import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { RacletteComponent } from './raclette/raclette.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { MovieListComponent } from './movie-list/movie-list.component';
import { DisplayMovieDirective } from './display-movie.directive';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ROUTES } from './app.route';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChildComponent } from './child/child.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { MagicOvenComponent } from './magic-oven/magic-oven.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserProfilComponent,
    RacletteComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    MovieListComponent,
    DisplayMovieDirective,
    HomeComponent,
    ContactComponent,
    SignUpComponent,
    ChildComponent,
    KitchenComponent,
    MagicOvenComponent
  ],
  imports: [
    BrowserModule,
    // utile pour le formulaire
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
