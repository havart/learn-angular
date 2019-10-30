import { Pipe, PipeTransform } from '@angular/core';
import { getClientAge } from '../helpers/get-client-age.helper';

@Pipe({
    name: 'ageData',
})
export class AgeTransformPipe implements PipeTransform {
    transform(value: string): string {
        const age = getClientAge(value);

        return age;
    }
}
