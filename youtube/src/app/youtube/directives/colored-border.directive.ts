import { Directive, Input } from '@angular/core'
import { getTimeFromString } from '../utils/get-time-from-string'

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
  standalone: true,
  host: {
    '[style.border-bottom-color]': 'borderColor',
    '[style.border-bottom-style]': '"solid"',
    '[style.border-bottom-width]': '"5px"',
  },
})
export class ColoredBorderDirective {
  @Input({ alias: 'ytColoredBorder' }) public date!: string
  public get borderColor(): Colors {
    const date = Date.now() - getTimeFromString(this.date)

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
}
