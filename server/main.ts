import { Meteor } from 'meteor/meteor';
import {populateUsers} from "./imports/fixtures/users";

Meteor.startup(() => {
    populateUsers();
});
