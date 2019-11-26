import { Installments } from './installments.model';

export class Product {
    id: number;
    name: string;
    image: string;
    oldPrice: number;
    price: number;
    description: string;
    installments: Installments;

    constructor() {
        this.installments = new Installments();
    }
}