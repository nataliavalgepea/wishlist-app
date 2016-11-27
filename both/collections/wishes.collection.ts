import {MongoObservable} from "meteor-rxjs";
import {Wish} from "../models/wish.model";

export const Wishes = new MongoObservable.Collection<Wish>('wishes');
