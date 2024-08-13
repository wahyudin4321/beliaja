import { PartialType } from '@nestjs/swagger';
import { CreateSuplierDto } from './create-suplier.dto';

export class UpdateSuplierDto extends PartialType(CreateSuplierDto) {}
