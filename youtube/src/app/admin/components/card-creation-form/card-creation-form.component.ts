import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core'
import {
  FormArray,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { ValidationErrorsComponent } from '../../../shared/components/validation-errors/validation-errors.component'
import { CUSTOM_ERRORS } from '../../../shared/tokens/custom-errors.token'
import { validationErrors } from '../../constants/validation-errors.constant'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { linkValidator } from '../../../shared/validators/link/link.validator'
import { isNotFutureDateValidator } from '../../../shared/validators/is-not-future-date/is-not-future-date.validator'
import { Store, select } from '@ngrx/store'
import { YoutubeActions } from '../../../state/actions/youtube.actions'

const MAX_TAGS_FORM_LENGTH = 5

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
  private formBuilder = inject(NonNullableFormBuilder)
  private store = inject(Store)
  private customCards = this.store.pipe(
    select(state => state.youtube.customCards),
  )

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
    tags: this.formBuilder.array([
      this.createTagFormControl(),
    ]),
  })

  public get tags() {
    return this.cardForm.get('tags') as FormArray
  }

  public resetTags() {
    while (this.tags.length > 1) {
      this.tags.removeAt(this.tags.length - 1)
    }
  }

  public createTagFormControl() {
    return this.formBuilder.control('', [
      Validators.required,
    ])
  }

  public pushTagFormControl() {
    if (this.tags.length >= MAX_TAGS_FORM_LENGTH) {
      return
    }

    this.tags.push(this.createTagFormControl())
  }

  public reset() {
    this.resetTags()
    this.cardForm.reset()
  }

  public getCardInfo() {
    const raw = this.cardForm.getRawValue()

    return {
      tags: this.tags.value,
      title: raw.title,
      createdAt: raw.createdAt,
      videoLink: raw.videoLink,
      imageLink: raw.imageLink,
      description: raw.description,
      id: crypto.randomUUID(),
      isCustom: true,
    }
  }

  public submit() {
    this.store.dispatch(
      YoutubeActions.createCustomCard({
        card: this.getCardInfo(),
      }),
    )
  }
}
