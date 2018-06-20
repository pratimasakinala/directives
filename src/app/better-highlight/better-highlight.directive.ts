import { 
  Directive, 
  Renderer2, 
  ElementRef, 
  OnInit, 
  HostListener, 
  HostBinding 
} from '@angular/core';

@Directive({
  selector: '[betterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private renderer: Renderer2, 
    private elementRef: ElementRef) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // forth argument is optional. We can set !important in that argument
  }

  /* HostListener example */
  // @HostListener('mouseenter') mouseEnter() { // HostListener decorator is added to a method we want to execute on an event
  //  // the event that we are listening for is added as an argument to HostListener
  //   // listening for mouseenter event on host
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  // }

  // @HostListener('mouseleave') mouseOut() {
  //   // listening for mouseleave event on host
  //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  // }
  /* End HostListener example */
  

  /* HostBinding example */
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  // bind to host property using HostBinding
  // define in string
  // camelCase property name because we are accessing DOM property not CSS

  @HostListener('mouseenter') mouseEnter() { 
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseOut() {
    this.backgroundColor = 'transparent';
  }
  /* End HostBinding example */
  

}
