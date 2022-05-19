import { Specification } from "../entities/specification";

export interface ICreateCar {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
  specification?: Specification[];
}
