import { Component, Input } from '@angular/core';
import { iCars } from '../../models/iCars';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  // Get the carCard from the parent component
  @Input() carCard: iCars | null = null;
}
