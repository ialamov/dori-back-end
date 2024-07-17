import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CityEntity } from "./city.entity.js";

@Entity({name: 'neighborhood'})
export class NeighborhoodEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id!: number

  @Column({
    name: 'neighborhood_full_name',
    type: 'varchar',
    nullable: false,
    unique: true
  })
  neighborhoodFullName!: string

  @ManyToOne(() => CityEntity, {
    nullable: false,
    eager: true
  })
  @JoinColumn({name: 'city'})
  city!: CityEntity
}