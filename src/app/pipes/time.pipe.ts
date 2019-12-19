import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'time',
})
export class TimePipe implements PipeTransform {
    transform(value: number): string {
        return value < 10 ? `0${value}` : value.toString();
    }
}
