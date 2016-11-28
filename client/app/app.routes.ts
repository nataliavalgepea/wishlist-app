import {Route} from "@angular/router";
import {WishesListComponent} from "./wishes/wishes-list.component";
import {UserDetailsComponent} from "./users/user-details.component";
import {WishesFormComponent} from "./wishes/wishes-form.component";
import { Meteor } from 'meteor/meteor';

export const routes: Route[] = [
    {path: '', component: WishesListComponent},
    {path: 'add', component: WishesFormComponent, canActivate: ['canActivateForLoggedIn']},
    {path: 'user/:userId', component: UserDetailsComponent}
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !!Meteor.userId()
}];