 import { Component, Input, ElementRef } from '@angular/core';
// import * as $ from 'jquery';
// import 'owl-carousel';

@Component({
  selector: 'owl-carousel',
  template: `<ng-content></ng-content>`
})
export class OwlCarousel {

  @Input() options: Object;
  
  f = true;
  
  $owlElement: any;

  defaultOptions: any = {};

  constructor(private el: ElementRef) {
    console.log('I am in the carousel');
  }

  ngAfterViewInit() {
    for (var key in this.options) {
      this.defaultOptions[key] = this.options[key];
    }
    console.log(this.$owlElement);
    this.$owlElement = $(this.el.nativeElement).owlCarousel(this.defaultOptions);
    console.log(this.$owlElement);
    console.log(this.defaultOptions);
  }


  ngOnDestroy() {
    // this.$owlElement.owlCarousel('destroy');
    // this.$owlElement = null;
  }
}