import { Injectable } from '@angular/core';
import {Wish} from "../../../both/models/wish.model";
import {Wishes} from "../../../both/collections/wishes.collection";
import {Observable} from "rxjs";

@Injectable()
export class WishesService {
    addWish(value: any): void {
        Wishes.insert(value);
    }

    removeWish(wish: Wish): void {
        Wishes.remove(wish._id);
    }

    getAll(): Observable<Wish[]> {
        return Wishes.find({}).zone();
    }
}
