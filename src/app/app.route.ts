import { Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfilComponent } from "./user-profil/user-profil.component";

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'sign-up', component: SignUpComponent},
    { path: 'user-profil', component: UserProfilComponent},
    { path: 'kitchen', component: KitchenComponent},
];

export { ROUTES };