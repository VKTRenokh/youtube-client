import { Params } from '@angular/router'

export const getId = (params: Params): string | null =>
  params['id']
