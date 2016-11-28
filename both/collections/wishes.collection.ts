import {MongoObservable} from "meteor-rxjs";
import {Wish} from "../models/wish.model";

export const Wishes = new MongoObservable.Collection<Wish>('wishes');

function loggedIn() {
    return !!Meteor.user();
}

function canEdit(userId, document) {
    return loggedIn();
}

Wishes.allow({
    insert: loggedIn,
    update: canEdit,
    remove: canEdit
});