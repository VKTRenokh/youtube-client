import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core'
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { ValidationErrorsComponent } from '../../../shared/components/validation-errors/validation-errors.component'
import { CUSTOM_ERRORS } from '../../../shared/tokens/custom-errors.token'
import { validationErrors } from '../../constants/validation-errors.constant'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { linkValidator } from '../../../shared/validators/link/link.validator'
import { isNotFutureDateValidator } from '../../../shared/validators/is-not-future-date/is-not-future-date.validator'

@Component({
  selector: 'yt-card-creation-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ValidationErrorsComponent,
    ButtonComponent,
  ],
  templateUrl: './card-creation-form.component.html',
  styleUrl: './card-creation-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CUSTOM_ERRORS,
      useValue: validationErrors,
    },
  ],
})
export class CardCreationFormComponent {
  private formBuilder = inject(FormBuilder)

  public cardForm = this.formBuilder.group({
    title: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: this.formBuilder.control('', [
      Validators.maxLength(255),
    ]),
    imageLink: this.formBuilder.control('', [
      Validators.required,
      linkValidator,
    ]),
    createdAt: this.formBuilder.control('', [
      Validators.required,
      isNotFutureDateValidator,
    ]),
    videoLink: this.formBuilder.control('', [
      Validators.required,
      linkValidator,
    ]),
  })
}
