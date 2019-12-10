import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(items: any, titlename: string): any {
    if(items&&items.length){
      return items.filter(items=>{
        if(titlename&&items.title.toLowerCase().indexOf(titlename.toLowerCase())===-1){
          return false;
        }
        return true;
      })
    }
  }

}
