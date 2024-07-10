import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'yt-login',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private authService = inject(AuthService)

  public login() {}
}
