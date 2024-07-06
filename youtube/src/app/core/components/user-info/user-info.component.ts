import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'yt-user-info',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {}
