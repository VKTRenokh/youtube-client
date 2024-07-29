import { createActionGroup, props } from '@ngrx/store'

export const FavoriteActions = createActionGroup({
  source: 'Favorite',
  events: {
    add: props<{ id: string }>(),
  },
})
