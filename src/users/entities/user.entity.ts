import { UUID } from "crypto";
import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity('users')
export class User {
    @ObjectIdColumn()
    id: UUID

    @Column()
    name: string

    @Column()
    email: string

    password: string

    @Column({ default: true })
    isActive: boolean = true
}