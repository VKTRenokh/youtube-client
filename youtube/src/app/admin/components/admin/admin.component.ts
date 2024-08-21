import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core'
import { CardCreationFormComponent } from '../card-creation-form/card-creation-form.component'

@Component({
  selector: 'yt-admin',
  standalone: true,
  imports: [CardCreationFormComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {}
