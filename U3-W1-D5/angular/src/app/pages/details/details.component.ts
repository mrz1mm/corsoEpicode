import { Component, Input } from '@angular/core';
import { iCars } from '../../models/iCars';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  // Get the carCard from the parent component
  @Input() carCard: iCars | null = null;
  // Create an empty array to store the cars
  carsArray: iCars[] = [];
  car: iCars | undefined = undefined;
  model: string = '';

  constructor(
    // ActivatedRoute is used to get the route parameters
    private route: ActivatedRoute,
    // CarsService is used to get the cars array
    private carsService: CarsService
  ) {}

  async ngOnInit() {
    // Get the cars array from the service
    await this.carsService.getFromJson();

    // Get the route parameters
    this.route.params.subscribe((params: any) => {
      this.model = params.model.slice(1);

      // Get the car from the service
      this.car = this.carsService.getModel(this.model);
      if (this.car) console.log('modelImage:', this.car.modelImage);
    });
  }
}
