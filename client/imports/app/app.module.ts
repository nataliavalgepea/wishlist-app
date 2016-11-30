import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {WishesFormComponent} from "./wishes/wishes-form.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WishesService} from "./wishes/wishes.service";
import {WishesListComponent} from "./wishes/wishes-list.component";
import {RouterModule} from '@angular/router';
import {routes, ROUTES_PROVIDERS} from "./app.routes";
import {AccountsModule} from "angular2-meteor-accounts-ui";
import {MaterialModule} from "@angular/material";
import {LoginComponent} from "./auth/login.component";
import {SignupComponent} from "./auth/signup.component";

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
        LoginComponent,
        SignupComponent
    ],
    providers: [
        ...ROUTES_PROVIDERS,
        WishesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

