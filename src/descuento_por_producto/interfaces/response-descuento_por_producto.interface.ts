import { Descuento_por_producto_Entity } from "../entities/descuento_por_producto.entity";

export interface ResponseAllProducts{
    page: number;
    lastPage: number;
    limit: number;
    total: number;
    data: Descuento_por_producto_Entity[];
}