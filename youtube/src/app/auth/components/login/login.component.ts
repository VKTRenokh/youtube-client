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
import { Observable, map, tap } from 'rxjs'
import { AsyncPipe } from '@angular/common'

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
      [Validators.required, Validators.min(6)],
    ],
  })

  public rederictTo = input.required<string>()

  public onSubmit() {
    this.authService.login()
    this.router.navigate([this.rederictTo() || '/'])
  }
}
