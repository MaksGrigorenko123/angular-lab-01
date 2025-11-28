import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]',
  standalone: true,
})
export class HoverStyleDirective {

  @Input() appHoverStyle: string = 'transparent';
  @Input() hoverBg: string = '#f6f8ff';
  @Input() hoverShadow: string = '0 8px 16px rgba(0,0,0,0.15)';
  @Input() hoverScale = 1.02;

  @Input() hoverTextColor: string = '#222';

  @Input() defaultTextColor: string = '#333';

  constructor(private el: ElementRef, private r: Renderer2) {
    this.r.setStyle(this.el.nativeElement, 'transition', 'all .18s ease');
    this.r.setStyle(this.el.nativeElement, 'background', this.appHoverStyle);
    this.r.setStyle(this.el.nativeElement, 'color', this.defaultTextColor);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', '12px');
  }

  @HostListener('mouseenter')
  onEnter() {
    this.r.setStyle(this.el.nativeElement, 'background', this.hoverBg);
    this.r.setStyle(this.el.nativeElement, 'boxShadow', this.hoverShadow);
    this.r.setStyle(this.el.nativeElement, 'transform', `scale(${this.hoverScale})`);
    this.r.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.r.setStyle(this.el.nativeElement, 'color', this.hoverTextColor);
  }

  @HostListener('mouseleave')
  onLeave() {
    this.r.setStyle(this.el.nativeElement, 'background', this.appHoverStyle);
    this.r.removeStyle(this.el.nativeElement, 'boxShadow');
    this.r.removeStyle(this.el.nativeElement, 'transform');
    this.r.setStyle(this.el.nativeElement, 'color', this.defaultTextColor);
  }
}
