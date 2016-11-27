import { Component, OnInit } from '@angular/core';
import template from './wishes-list.component.html';
import {Observable} from "rxjs";
import {Wish} from "../../../both/models/wish.model";
import {WishesService} from "./wishes.service";

@Component({
    selector: 'wishes-list',
    template
})
export class WishesListComponent implements OnInit {
    wishes: Observable<Wish[]>;

    constructor(private wishesService: WishesService) { }

    ngOnInit() {
        this.wishes = this.wishesService.getAll();
    }

    removeWish(wish: Wish):void {
        this.wishesService.removeWish(wish);
    }

}
