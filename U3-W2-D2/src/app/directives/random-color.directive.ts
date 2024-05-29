import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomColor]',
})
export class RandomColorDirective {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    const colors = this.getRandomColor();
    this.element.nativeElement.style.backgroundColor = colors.backgroundColor;
    this.element.nativeElement.style.color = colors.textColor;
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];

    // Calcola la luminosità del colore
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const luminosity = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Se il colore è scuro, il testo dovrebbe essere bianco
    const textColor = luminosity < 0.5 ? '#FFFFFF' : '#000000';

    return { backgroundColor: color, textColor };
  }
}
