import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AddressEntity } from "./address.entity.js";
import { FamilyEntity } from "./family.entity.js";

@Entity({name: 'user'})
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id!: number

  @Column({
    name: 'full_name',
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: false
  })
  fullName!: string

  @Column({
    name: 'email',
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true
  })
  email!: string

  @Column({
    name: 'cpf',
    type: 'varchar',
    nullable: false,
    unique: true
  })
  cpf!: string

  @Column({
    name: 'date_of_birth',
    type: 'date',
    nullable: false,
    unique: false
  })
  dateOfBirth!: Date

  @OneToOne(() => AddressEntity, {
    nullable: true, 
    eager: true
  })
  @JoinColumn({name: 'address'})
  address!: AddressEntity

  @ManyToOne(() => FamilyEntity, {
    nullable: false,
    eager: true
  })
  @JoinColumn({ name: 'family'})
  family!: FamilyEntity

  @Column({
    name: 'cellphone',
    type: 'varchar',
    nullable: true
  })
  cellphone!: string

  @Column({
    name: 'landline',
    type: 'varchar',
    nullable: true
  })
  landline!: string
}