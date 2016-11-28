import {CollectionObject} from "./collection-object.model";

export interface Wish extends CollectionObject {
    title: string;
    description?: string;
    price: number;
    userId: string;
    takenByUserId: string;
}
