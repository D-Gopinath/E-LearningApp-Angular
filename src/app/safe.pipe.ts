import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer){}

  transform(url: string){
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
