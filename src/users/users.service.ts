import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";

import { CreateUserDTO } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: MongoRepository<User>
    ) {}

    async create(user: CreateUserDTO): Promise<User> {
        const newUser = new User()
        newUser.name = user.name
        newUser.email = user.email
        newUser.password = user.password
        return await this.userRepository.save(newUser)
    }
}