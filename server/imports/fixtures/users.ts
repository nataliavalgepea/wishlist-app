import {Users} from "../../../both/collections/users.collection";
import {User} from "../../../both/models/user.model";

export function populateUsers() {
    if (Users.find().cursor.count() === 0) {
        const users: User[] = [
            {
                name: 'Natalia Valgepea',
                password: 'password',
                username: 'natalia'
            },
            {
                name: 'Test User',
                password: 'password',
                username: 'test'
            },
            {
                name: 'Test User 2',
                password: 'password',
                username: 'test2'
            }];

        users.forEach((user: User) => Users.insert(user));
    }
}
