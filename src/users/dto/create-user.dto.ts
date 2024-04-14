import { User } from "../entities/user.entity"

export class CreateUserDTO {
    name: string
    email: string
    password: string

    toEntity(): User {
        const user = new User()
        user.name = this.name
        user.email = this.email
        user.password = this.password
        return user
    }
}