import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  create(createUserDto: CreateUserDto) {
    const user = new User();
    user.email = createUserDto.email;
    user.firstname = createUserDto.firstname;
    user.lastname = createUserDto.lastname;
    user.password = bcrypt.hashSync(createUserDto.password, 10);
    user.phone_number = createUserDto.phone_number;

    return this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: string) {
    return await this.userRepo.findOneBy({ id: id }).catch((error: any) => {
      if (error.code == '22P02') {
        throw new NotFoundException('User Not Found!');
      }
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = new User();
    user.email = updateUserDto.email;
    user.firstname = updateUserDto.firstname;
    user.lastname = updateUserDto.lastname;
    user.phone_number = updateUserDto.phone_number;
    return await this.userRepo
      .update({ id: id }, user)
      .then(() => {
        return 'success update';
      })
      .catch((error: any) => {
        return error;
      });
  }

  async remove(id: string) {
    return await this.userRepo
      .delete({ id: id })
      .then(() => {
        return 'success delete';
      })
      .catch((error: any) => {
        return error;
      });
  }
}
