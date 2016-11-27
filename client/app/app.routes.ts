import {Route} from "@angular/router";
import {WishesListComponent} from "./wishes/wishes-list.component";
import {UserDetailsComponent} from "./users/user-details.component";

export const routes: Route[] = [
    {path: '', component: WishesListComponent},
    {path: 'user/:userId', component: UserDetailsComponent}
];
