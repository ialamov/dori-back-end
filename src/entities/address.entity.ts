import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { NeighborhoodEntity } from "./neighborhood.entity.js";

@Entity({name: 'address'})
export class AdressEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id!: number

  @Column({
    name: 'street',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  initials!: string

  @Column({
    name: 'number',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  number!: string

  @Column({
    name: 'additional',
    type: 'varchar',
    nullable: true,
  })
  additional!: string

  @Column({
    name: 'zip_code',
    type: 'varchar',
    nullable: true,
  })
  zipCode!: string

  @ManyToOne(() => NeighborhoodEntity, {
    nullable: false,
    eager: true
  })
  @JoinColumn({name: 'neighborhood'})
  neighborhood!: NeighborhoodEntity
}