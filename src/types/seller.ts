import { Market } from "./market";

export type Seller = {
    id: number;
    name: string;
    img: string;
    sellerId: number;
    markets?: Market[];
    createdAt: string;
};