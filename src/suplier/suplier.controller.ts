import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SuplierService } from './suplier.service';
import { CreateSuplierDto } from './dto/create-suplier.dto';
import { UpdateSuplierDto } from './dto/update-suplier.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@ApiTags('supplier')
@Controller('suplier')
@ApiBearerAuth()
@UseGuards(JwtGuard)
export class SuplierController {
  constructor(private readonly suplierService: SuplierService) {}

  @Post()
  create(@Body() createSuplierDto: CreateSuplierDto) {
    return this.suplierService.create(createSuplierDto);
  }

  @Get()
  findAll() {
    return this.suplierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suplierService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuplierDto: UpdateSuplierDto) {
    return this.suplierService.update(id, updateSuplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suplierService.remove(id);
  }
}
