import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { iCars } from '../../models/iCars';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carsArray: iCars[] = [];

  constructor(
    private carsService: CarsService,
    private audioService: AudioService
  ) {
    if (!this.audioService.isPlaying()) {
      this.audioService.play();
    }
  }

  async ngOnInit() {
    await this.carsService.getFromJson();
    this.carsArray = this.carsService.getRandomCars();
  }
}
