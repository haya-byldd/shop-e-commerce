import { ProductDetail } from "./product";

export type CartProductType = ProductDetail & {
    quantity: number;
};