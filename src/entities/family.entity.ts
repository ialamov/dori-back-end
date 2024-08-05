import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'family'})
export class FamilyEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id!: number
}