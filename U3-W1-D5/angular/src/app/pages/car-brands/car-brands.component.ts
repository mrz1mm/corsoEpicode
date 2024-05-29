import { Component, Input } from '@angular/core';
import { iCars } from '../../models/iCars';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrl: './car-brands.component.scss',
})
export class CarBrandsComponent {
  // Get the carCard from the parent component
  @Input() carCard: iCars | null = null;
  // Create an empty array to store the cars
  carsArray: iCars[] = [];
  brand: string = '';
  disclaimer: string = '';

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
      this.brand = params.brand.slice(1);

      // Get the cars from the service
      this.carsArray = this.carsService.getBrand(this.brand);
      this.disclaimer = this.disclaimerBrand(this.brand);
    });
  }

  // Get the disclaimer for the brand
  disclaimerBrand(brand: string): string {
    if (brand === 'Fiat') return 'The most lovely.';
    if (brand === 'Ford') return 'Bring on tomorrow.';
    if (brand === 'Audi') return 'Future is an attitude.';
    return 'No disclaimer for this brand.';
  }
}
