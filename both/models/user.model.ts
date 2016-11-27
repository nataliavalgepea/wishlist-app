import {CollectionObject} from "./collection-object.model";

export interface User extends CollectionObject {
    name: string;
    username: string;
    password: string;
}
