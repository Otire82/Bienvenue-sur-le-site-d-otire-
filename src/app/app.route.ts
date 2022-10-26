import { Routes } from "@angular/router";
import { ChildComponent } from "./child/child.component";
import { ContactComponent } from "./contact/contact.component";
import { CreateOnomatopiaComponent } from "./create-onomatopia/create-onomatopia.component";
import { DeveloperComponent } from "./developer/developer.component";
import { HomeComponent } from "./home/home.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { MagicOvenComponent } from "./magic-oven/magic-oven.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfilComponent } from "./user-profil/user-profil.component";

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'sign-up', component: SignUpComponent},
    { path: 'user-profil', component: UserProfilComponent},
    { path: 'kitchen', component: KitchenComponent},
    { path: 'developer', component: DeveloperComponent },
    { path: 'magic-oven', component: MagicOvenComponent },
    { path: 'create-onomatopia', component: CreateOnomatopiaComponent },
];

export { ROUTES };