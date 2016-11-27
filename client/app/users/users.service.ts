import { Injectable } from '@angular/core';
import {User} from "../../../both/models/user.model";
import {Users} from "../../../both/collections/users.collection";
import {Observable} from "rxjs";

@Injectable()
export class UsersService {

    getUserById(id: string) : User {
        return Users.findOne({_id: id});
    }

    getAll() : Observable<User[]> {
        return Users.find({}).zone();
    }

    constructor() { }

}
