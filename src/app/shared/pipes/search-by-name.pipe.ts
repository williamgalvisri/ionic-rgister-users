import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchbyname',
})
export class SearchByNamePipe implements PipeTransform {
  transform(data: any[], args?: string): any {
    let resultFiltered = data;
    if (args) {
      resultFiltered = data.filter(
        (d) =>
          `${d.firstName} ${d.lastName}`
            .toLocaleLowerCase()
            .indexOf(args.toLocaleLowerCase()) > -1
      );
    }
    return resultFiltered;
  }
}
