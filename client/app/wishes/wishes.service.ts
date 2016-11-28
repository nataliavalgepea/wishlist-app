import {Injectable} from '@angular/core';
import {Wish} from "../../../both/models/wish.model";
import {Wishes} from "../../../both/collections/wishes.collection";
import {Observable} from "rxjs";
import {Meteor} from 'meteor/meteor';

@Injectable()
export class WishesService {
    addWish(value: any): void {
        if (!Meteor.userId())
            return;

        value.userId = 'someId';
        Wishes.insert(Object.assign({}, value, {userId: Meteor.userId()}));
    }

    removeWish(wish: Wish): void {
        if (!Meteor.userId())
            return;

        Wishes.remove(wish._id);
    }

    takeWish(wish: Wish) : void {
        if (!Meteor.userId())
            return;

        Wishes.update(wish._id, {
            $set: {
                takenByUserId: Meteor.userId()
            }
        });
    }

    getAll(): Observable<Wish[]> {
        return Wishes.find({}).zone();
    }
}
