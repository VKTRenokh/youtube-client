import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
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
  @Output() public press = new EventEmitter<Event>()

  @Input({
    required: true,
    alias: 'aria-label',
  })
  public ariaLabel!: string

  @Input()
  public type!: 'unstyled' | 'default'

  public onClick(event: Event) {
    this.press.emit(event)
  }

  public isStyled() {
    return this.type !== 'unstyled'
  }
}
