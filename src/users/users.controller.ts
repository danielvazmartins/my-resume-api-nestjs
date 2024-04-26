import { Controller, Post, Body } from "@nestjs/common";

import { CreateUserDTO } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { error } from "console";

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {}

    @Post()
    async create(@Body() userData: CreateUserDTO) {
        return await this.usersService.create(userData)
    }

}