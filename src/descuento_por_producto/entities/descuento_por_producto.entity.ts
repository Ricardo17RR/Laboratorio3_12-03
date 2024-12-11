import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../common/config/base.entity";
import { ProductEntity } from "../../products/entities/product.entity";
import { DescuentoEntity } from "../../descuento/entities/descuento.entity";

@Entity('descuento_por_producto')
export class Descuento_por_producto_Entity extends BaseEntity {
 
    @ManyToOne(()=> ProductEntity, (product)=>product.descuento_por_producto)
    @JoinColumn({name:'product_id'})
    product: string;

    @ManyToOne(()=> DescuentoEntity, (descuento)=>descuento.descuento_por_producto)
    @JoinColumn({name:'descuento_id'})
    descuentos: string;

}
