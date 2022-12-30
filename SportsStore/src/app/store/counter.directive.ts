import { Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[counterOf]'
})
export class CounterDirective {
@Input("counterOf") counter: number = 0;

constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    for (let ii = 0; ii < this.counter; ii++) {
      if (ii == 0) {
        this.container.createEmbeddedView(this.template, 
          new CounterDirectiveContext('<<'));  

        this.container.createEmbeddedView(this.template, 
          new CounterDirectiveContext('<'));
      } 

      this.container.createEmbeddedView(this.template, 
        new CounterDirectiveContext(ii+1));  
      
      if (ii == this.counter - 1) {
        this.container.createEmbeddedView(this.template, 
          new CounterDirectiveContext('>'));

          this.container.createEmbeddedView(this.template, 
            new CounterDirectiveContext('>>'));  
      } 
    }
  }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) {}
}
