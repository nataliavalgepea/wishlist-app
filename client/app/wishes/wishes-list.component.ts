import {Component, OnInit} from '@angular/core';
import template from './wishes-list.component.html';
import {Observable} from "rxjs";
import {Wish} from "../../../both/models/wish.model";
import {WishesService} from "./wishes.service";
import {InjectUser} from "angular2-meteor-accounts-ui";

@Component({
    selector: 'wishes-list',
    template
})
@InjectUser('user')
export class WishesListComponent implements OnInit {
    wishes: Observable<Wish[]>;
    user: Meteor.User;

    constructor(private wishesService: WishesService) {
    }

    ngOnInit() {
        this.wishes = this.wishesService.getAll();
        console.log(this.user);
    }

    takeWish(wish: Wish): void {
        this.wishesService.takeWish(wish);
    }

    removeWish(wish: Wish): void {
        this.wishesService.removeWish(wish);
    }

}
