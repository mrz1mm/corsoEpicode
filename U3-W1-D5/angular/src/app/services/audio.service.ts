import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  constructor() {}
  audio = new Audio();

  async play(): Promise<void> {
    this.audio.src =
      '../../../assets/audio/WWE The Undertaker Theme Song Rest In Peace.mp3';
    this.audio.loop = true;
    await this.audio.play();
  }

  pause(): void {
    this.audio.pause();
  }

  isPlaying(): boolean {
    return !this.audio.paused;
  }
}
