import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  output,
} from '@angular/core'

@Component({
  selector: 'yt-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public press = output<Event>()

  public ariaLabel = input.required<string>()

  public variant = input<'unstyled' | 'default'>()
  public type = input<string>()
  @Input() public disabled!: boolean

  public onClick(event: Event) {
    this.press.emit(event)
  }

  public isStyled() {
    return this.variant() !== 'unstyled'
  }
}
