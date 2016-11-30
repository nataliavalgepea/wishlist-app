import { Component, OnInit } from '@angular/core';
import template from './app.component.html';
import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
    selector: 'app',
    template
})
@InjectUser('user')
export class AppComponent implements OnInit {
    user: Meteor.User;

    constructor() { }

    ngOnInit() {
    }

    logout() {
        Meteor.logout();
    }
}
