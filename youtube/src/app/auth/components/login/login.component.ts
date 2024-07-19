import { FormBuilder, Validators } from '@angular/forms'
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { AsyncPipe } from '@angular/common'
import { passwordValidator } from '../../validators/password.validator'
import { specialSymbols } from '../../constants/symbols.constant'

@Component({
  selector: 'yt-login',
  standalone: true,
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private authService = inject(AuthService)
  private router = inject(Router)
  private formBuilder = inject(FormBuilder)

  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        passwordValidator(specialSymbols),
      ],
    ],
  })

  public rederictTo = input.required<string>()

  public onSubmit() {
    this.authService.login()
    this.router.navigate([this.rederictTo() || '/'])
  }
}
