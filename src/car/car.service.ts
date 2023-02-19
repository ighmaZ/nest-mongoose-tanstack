import { HttpException, Injectable } from '@nestjs/common';
import { Cars } from './cars.mock';
@Injectable()
export class CarService {
  private cars = Cars; // from the mock car

  public getCars() {
    return this.cars;
  }

  public postCar(car) {
    return this.cars.push(car);
  }
  public getCarById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) {
      // throw an error if not found
      throw new HttpException('could not find ', 404);
    }
    return car;
  }
  public deleteCarById(id: number) {
    const index = this.cars.findIndex((car) => car.id === id);
    if (index === -1) {
      throw new HttpException('could not find ', 404);
    }
    this.cars.splice(index, 1);
    return this.cars;
  }
}
