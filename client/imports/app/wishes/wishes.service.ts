import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Meteor} from 'meteor/meteor';
import {Wishes} from "../../../../both/collections/wishes.collection";
import {Wish} from "../../../../both/models/wish.model";

@Injectable()
export class WishesService {
    addWish(value: any): void {
        if (!Meteor.userId())
            return;

        Wishes.insert(Object.assign({}, value, {createdBy: Meteor.user()}));
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
                takenBy: Meteor.user()
            }
        });
    }

    getAll(): Observable<Wish[]> {
        return Wishes.find({}).zone();
    }
}
