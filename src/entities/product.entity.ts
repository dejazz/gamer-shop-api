import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    img: string
    
    @Column('float')
    price: number
}