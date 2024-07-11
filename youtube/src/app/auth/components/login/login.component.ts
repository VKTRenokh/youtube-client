import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { AuthService } from '../../services/auth/auth.service'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'yt-login',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private authService = inject(AuthService)
  private router = inject(Router)
  public password = signal('')
  public email = signal('')

  private isEmpty() {
    return !this.password() && !this.email()
  }

  public login() {
    if (this.isEmpty()) {
      return
    }

    this.authService.login()
    this.router.navigate(['/'])
  }
}
