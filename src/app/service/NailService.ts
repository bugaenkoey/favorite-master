import { INailServise } from "./INailServise";

export class NailService implements INailServise {
    NailService(){

    }
    id!: number;
    name!: string;
    description!: string;
    price!: number;
    duration!: number;

}