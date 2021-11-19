import { IOrder } from "./IOrder";

export interface IUser{
    // "id": 3,
    // "name": "Djanet",
    // "surname": "Djakson",
    // "phone": 888888,
    // "orders": []

    id?:number;
    name:string;
    surname:string;
    phone:number;
    orders?:IOrder;
}