import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, Min, MinLength } from "class-validator";

export class create_Descuento_por_productoDto {
 
    @IsString()
    @IsNotEmpty()
    @MinLength(3)    
    product: string;

    @IsString()
    @IsOptional()
    descuentos: string;

}
