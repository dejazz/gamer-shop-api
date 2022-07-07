import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("float")
  subtotal: number;

  @ManyToMany(() => Product, { eager: true })
  @JoinTable()
  products: Product[];
}
