import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'state'})
export class StateEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id!: number

  @Column({
    name: 'initials',
    type: 'varchar',
    length: 2,
    nullable: false,
    unique: true
  })
  initials!: string

  @Column({
    name: 'state_full_name',
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true
  })
  stateFullName!: string

  @Column({
    name: 'code',
    type: 'varchar',
    nullable: false,
    unique: true
  })
  code!: number
}