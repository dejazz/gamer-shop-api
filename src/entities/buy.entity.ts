import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";


@Entity()
export class Buy {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(()=> User, user => user.buys)
    user: User

    @ManyToMany((type) => Product, {
        eager: true
    })@JoinTable()
    products: Product[]
    
    @Column("float")
    total: number
}