import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core'

export type ButtonVariant =
  | 'unstyled'
  | 'default'
  | undefined

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

  public variant = input<ButtonVariant>()
  public type = input<string>()
  public isStyled = computed(
    () => this.variant() !== 'unstyled',
  )
  public disabled = input<boolean>()

  public onClick(event: Event) {
    this.press.emit(event)
  }
}
