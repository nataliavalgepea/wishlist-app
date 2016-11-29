import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {WishesFormComponent} from "./wishes/wishes-form.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WishesService} from "./wishes/wishes.service";
import {WishesListComponent} from "./wishes/wishes-list.component";
import {RouterModule} from '@angular/router';
import {routes, ROUTES_PROVIDERS} from "./app.routes";
import {UserDetailsComponent} from "./users/user-details.component";
import {AccountsModule} from "angular2-meteor-accounts-ui";
import {MaterialModule} from "@angular/material";

@NgModule({
    imports: [
        BrowserModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        AccountsModule,
        MaterialModule.forRoot()
    ],
    exports: [],
    declarations: [
        AppComponent,
        WishesFormComponent,
        WishesListComponent,
        UserDetailsComponent
    ],
    providers: [
        ...ROUTES_PROVIDERS,
        WishesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

