import { Pipe, PipeTransform } from '@angular/core';

const SECOND_IN_MINUTE = 60;

@Pipe({
    name: 'timer',
})
export class TimerPipe implements PipeTransform {
    transform(value: number): string {
        let second = value;
        let secondRes: string;
        let minute = 0;

        if (value >= SECOND_IN_MINUTE) {
            minute = Math.floor(value / SECOND_IN_MINUTE);
            second = value - minute * SECOND_IN_MINUTE;
        }
        secondRes = second.toString();

        if (second < 10) {
            secondRes += '0';
        }

        return `${minute}: ${secondRes}`;
    }
}
