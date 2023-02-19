import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarDto } from './car.dto';
import { CarService } from './car.service';
@Controller('car')
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  public getCars() {
    return this.carService.getCars();
  }

  @Post()
  public postCar(@Body() car: CarDto) {
    return this.carService.postCar(car);
  }

  @Get(':id')
  public getCarById(@Param('id') id: number) {
    return this.carService.getCarById(id);
  }

  @Delete(':id')
  public deleteCarById(@Param('id') id: number) {
    return this.carService.deleteCarById(id);
  }
}
