import { DescuentoEntity } from "../entities/descuento.entity";

export interface ResponseAllProducts{
    page: number;
    lastPage: number;
    limit: number;
    total: number;
    data: DescuentoEntity[];
}