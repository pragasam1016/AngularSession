import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNgShowBackground]'
})
export class NgShowBackgroundDirective {

  constructor(el : ElementRef) { 
    el.nativeElement.style.backgroundColor = 'red';
  }

}
