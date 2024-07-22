import { AbstractControl } from '@angular/forms'

const isUrl = (string: string) =>
  /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/.test(
    string,
  )

export const linkValidator = (control: AbstractControl) =>
  isUrl(control.value)
    ? null
    : { url: { value: control.value } }
