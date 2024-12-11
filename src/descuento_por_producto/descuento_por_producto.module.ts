import { Module } from '@nestjs/common';
import { DescuentoPorProductoController } from './descuento_por_producto.controller';
import { DescuentoPorProductoService } from './descuento_por_producto.service';

@Module({
  controllers: [DescuentoPorProductoController],
  providers: [DescuentoPorProductoService]
})
export class DescuentoPorProductoModule {}
