import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../common/config/base.entity";
import { Descuento_por_producto_Entity } from "./../../descuento_por_producto/entities/descuento_por_producto.entity";
import { ProductEntity } from "src/products/entities/product.entity";

@Entity('descuento')
export class DescuentoEntity extends BaseEntity {

    @Column({type: 'varchar'})
    discount_name: string;

    @Column({type: 'varchar', nullable: true})
    description?: string;

    @Column({type: 'float', default: 0})
    percentage?: number = 0;

    @Column({type: 'float', default: 0})
    amount: number = 0;

    @OneToMany(()=>Descuento_por_producto_Entity,(descuento_por_producto)=>descuento_por_producto.descuentos)
    descuento_por_producto: string;

    @OneToMany(()=> Descuento_por_producto_Entity, (descuento_por_producto)=>descuento_por_producto.product)
    pruduct: string;
}
