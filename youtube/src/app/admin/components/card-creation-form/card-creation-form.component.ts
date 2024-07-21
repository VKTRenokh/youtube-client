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

@Component({
  selector: 'yt-card-creation-form',
  standalone: true,
  imports: [ReactiveFormsModule, ValidationErrorsComponent],
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
    test: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  })
}
