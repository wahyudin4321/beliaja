import { Module } from '@nestjs/common';
import { SuplierService } from './suplier.service';
import { SuplierController } from './suplier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suplier } from './entities/suplier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Suplier])],
  controllers: [SuplierController],
  providers: [SuplierService],
})
export class SuplierModule {}
