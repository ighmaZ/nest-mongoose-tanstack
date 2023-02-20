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
  public getCarById(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const car = this.cars.find((car) => car.id === carId);

      if (!car) {
        // throw an error if not found
        throw new HttpException('could not find ', 404);
      }
      return resolve(car);
    });
  }
  public deleteCarById(id: number): Promise<any> {
    const carId = Number(id);
    return new Promise((resolve) => {
      const index = this.cars.findIndex((car) => car.id === carId);
      if (index === -1) {
        throw new HttpException('could not find ', 404);
      }
      this.cars.splice(index, 1);
      return resolve(this.cars);
    });
  }
}
