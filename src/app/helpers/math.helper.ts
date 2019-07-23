import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathHelper {

  constructor() { }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
