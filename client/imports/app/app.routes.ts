import {Route} from "@angular/router";
import {WishesListComponent} from "./wishes/wishes-list.component";
import {WishesFormComponent} from "./wishes/wishes-form.component";
import {Meteor} from 'meteor/meteor';
import {LoginComponent} from "./auth/login.component";
import {SignupComponent} from "./auth/signup.component";

export const routes: Route[] = [
    {path: '', component: WishesListComponent},
    {path: 'add', component: WishesFormComponent, canActivate: ['canActivateForLoggedIn']},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !!Meteor.userId()
}];