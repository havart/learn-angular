import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timer',
})
export class TimerPipe implements PipeTransform {
    transform(value: number): string {
        return value < 10 ? `0${value}` : value.toString();
    }
}
