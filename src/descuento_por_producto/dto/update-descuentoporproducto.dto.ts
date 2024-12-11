import { PartialType } from '@nestjs/mapped-types';
import { create_Descuento_por_productoDto } from './create-descuentoporproducto.dto';

export class UpdateDescuento_por_productoDto extends PartialType(create_Descuento_por_productoDto) {}
