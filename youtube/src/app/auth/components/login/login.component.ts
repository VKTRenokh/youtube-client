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
import {
  RequiredCharacters,
  UppercaseCharacter,
  passwordValidator,
} from '../../validators/password.validator'
import { specialSymbols } from '../../constants/symbols.constant'
import { Numbers } from '../../validators/password.validator'

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

  public specialSymbols = specialSymbols

  public passwordValidationMap = new Map<string, string>([
    [
      RequiredCharacters,
      `Password should contain any of the following symbols: ${specialSymbols.join(' ')}`,
    ],
    [
      UppercaseCharacter,
      'Password should contain at least one uppercase character',
    ],
    [
      Numbers,
      'Password should contain at least one number',
    ],
  ])

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

  public get password() {
    return this.loginForm.get('password')
  }

  public get email() {
    return this.loginForm.get('email')
  }

  public getPasswordValidationErrors() {
    if (!this.password || !this.password.errors) {
      return []
    }

    const errors = Object.keys(this.password.errors)

    return errors.map(error =>
      this.passwordValidationMap.get(error),
    )
  }

  public didTouch(control: any) {
    return control.dirty || control.touched
  }

  public onSubmit() {
    this.authService.login()
    this.router.navigate([this.rederictTo() || '/'])
  }
}
