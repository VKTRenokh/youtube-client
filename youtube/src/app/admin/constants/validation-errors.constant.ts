import { CustomErrors } from '../../shared/tokens/custom-errors.token'

export const validationErrors: CustomErrors = {
  required: 'This field is required',
  minlength: 'This field content is too short',
  maxlength: 'This field content is too long',
}
