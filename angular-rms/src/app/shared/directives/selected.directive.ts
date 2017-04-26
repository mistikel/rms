import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwSelected]'
})
export class SelectedDirective {
  @HostBinding('class.hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
}