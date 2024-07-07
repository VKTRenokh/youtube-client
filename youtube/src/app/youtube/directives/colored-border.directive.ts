import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core'

const oneWeek = 604800000
const oneMonth = 2628002880
const halfYear = 15768017280

const enum Colors {
  Red = '#ff757f',
  Yellow = '#ffc777',
  Green = '#c3e88d',
  Blue = '#82aaff',
}

@Directive({
  selector: '[ytColoredBorder]',
})
export class ColoredBorderDirective implements OnInit {
  @Input('ytColoredBorder') public date!: string

  private constructor(
    public renderer: Renderer2,
    public elementRef: ElementRef,
  ) {}

  public getColor(publishedAt: Date): Colors {
    const date = Date.now() - publishedAt.getTime()

    if (date <= oneWeek) {
      return Colors.Blue
    }
    if (date < oneMonth) {
      return Colors.Green
    }
    if (date < halfYear) {
      return Colors.Yellow
    }

    return Colors.Red
  }

  public ngOnInit(): void {
    if (!this.date) {
      throw new Error('no date')
    }
    const date = new Date(this.date)

    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border-bottom',
      `${this.getColor(date)} 5px solid`,
    )
  }
}
