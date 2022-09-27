import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textlimit'
})
export class TextlimitPipe implements PipeTransform {

  transform(value: string, limit: number){
    if(value.length > limit) {
      return value.substr(0, limit) + "...";

    }
    else{
      return value;
    }

  }

}
