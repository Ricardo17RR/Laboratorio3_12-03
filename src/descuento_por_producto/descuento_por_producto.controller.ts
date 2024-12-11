import { Body, Controller, Post } from '@nestjs/common';
import { DescuentoPorProductoService } from './descuento_por_producto.service';
import { create_Descuento_por_productoDto } from './dto/create-descuentoporproducto.dto';
import { PaginationDto } from 'src/common/dtos/pagination/pagination.dto';


@Controller('descuento-por-producto')
export class DescuentoPorProductoController {
  constructor(private readonly descuentoPorProductoService: DescuentoPorProductoService) {}

  @Post()
  create(@Body() createProductDto: create_Descuento_por_productoDto) {
    return this.descuentoPorProductoService.create(createProductDto);
  }

  @Get()
  findAll( @Query() paginationDto: PaginationDto ) {
    return this.descuentoPorProductoService.findAll( paginationDto );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.descuentoPorProductoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.descuentoPorProductoService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.descuentoPorProductoService.remove(id);
  }
}