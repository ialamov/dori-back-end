import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StateEntity } from "./state.entity.js";

@Entity({name: 'city'})
export class CityEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int'
  })
  id!: number

  @ManyToOne(() => StateEntity, {
    nullable: false,
    eager: true
  })
  @JoinColumn({
    name: 'state'
  })
  state!: StateEntity

  @Column({
    name: 'city',
    type: 'varchar',
    nullable: false,
    unique: true
  })
  city!: string
}
