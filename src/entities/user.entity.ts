import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Buy } from "./buy.entity";
import { Cart } from "./cart.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column({unique:true})
    email:string

    @Column()
    password: string

    @OneToOne(()=> Cart,{eager:true})
    @JoinColumn()
    cart: Cart

    @OneToMany(()=> Buy, buy=> buy.user,{eager:true})
    buys: Buy[]
}