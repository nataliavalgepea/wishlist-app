import {CollectionObject} from "./collection-object.model";
import {User} from "./user.model";

export interface Wish extends CollectionObject {
    title: string;
    description?: string;
    price: number;
    createdBy: any;
    takenBy: any;
}
