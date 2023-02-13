import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import { Status } from 'src/app/types/status.types';

@Directive({
  selector: '[vexStatusHighlight]'
})
export class StatusHighlightDirective implements OnInit {
  @Input() status: Status;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.status) {
      this.renderer.addClass(
        this.elementRef.nativeElement,
        this.status.textClass
      );
      this.renderer.addClass(
        this.elementRef.nativeElement,
        this.status.bgClass
      );
    }
  }
}
