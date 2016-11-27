import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {WishesFormComponent} from "./wishes/wishes-form.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WishesService} from "./wishes/wishes.service";
import {WishesListComponent} from "./wishes/wishes-list.component";
import { RouterModule } from '@angular/router';
import {routes} from "./app.routes";
import {UserDetailsComponent} from "./users/user-details.component";
import {UsersService} from "./users/users.service";

@NgModule({
    imports: [
        BrowserModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
    declarations: [
        AppComponent,
        WishesFormComponent,
        WishesListComponent,
        UserDetailsComponent
    ],
    providers: [
        WishesService,
        UsersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

