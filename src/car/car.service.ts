import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Icar } from './interfaces/car.interface';
import { CarDto } from './car.dto';
@Injectable()
export class CarService {
  public getCars() {}

  public postCar(car) {}
  public getCarById(id: number): Promise<any> {}
  public deleteCarById(id: number): Promise<any> {}
}
