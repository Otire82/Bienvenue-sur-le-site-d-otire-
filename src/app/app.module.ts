import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { RacletteComponent } from './raclette/raclette.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    UserProfilComponent,
    RacletteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
