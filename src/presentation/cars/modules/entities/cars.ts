import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Category } from "./category";
import { Specification } from "./specification";
@Entity("cars")
export class Cars {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: number;

  @Column()
  available?: boolean;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @ManyToMany(() => Specification)
  @JoinTable({
    name: "specification_cars",
    joinColumns: [{ name: "car_id" }],
    inverseJoinColumns: [{ name: "specification_id" }],
  })
  specification: Specification[];

  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
      this.created_at = new Date();
    }
  }
}