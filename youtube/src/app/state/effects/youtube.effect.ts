import { inject } from '@angular/core'
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects'
import { YoutubeActions } from '../actions/youtube.actions'
import {
  catchError,
  exhaustMap,
  filter,
  map,
  mergeMap,
  of,
  take,
} from 'rxjs'
import { SearchService } from '../../youtube/services/search/search.service'
import { CustomCardService } from '../../admin/services/custom-card/custom-card.service'
import { Store } from '@ngrx/store'
import { State } from '../reducers/youtube.reducer'
import { isNotNullable } from '../../shared/utils/is-not-nullable'

export const searchEffect = createEffect(
  (
    searchService = inject(SearchService),
    actions = inject(Actions),
  ) =>
    actions.pipe(
      ofType(YoutubeActions.searchVideos),
      exhaustMap(type =>
        searchService.search(type.query).pipe(
          map(data =>
            YoutubeActions.searchVideosSuccess({ data }),
          ),
          catchError(data =>
            of(
              YoutubeActions.searchVideosFailure({
                error: new Error(data),
              }),
            ),
          ),
        ),
      ),
    ),
  { functional: true },
)

export const cardCreationEffect = createEffect(
  (
    customCardService = inject(CustomCardService),
    actions = inject(Actions),
  ) =>
    actions.pipe(
      ofType(YoutubeActions.createCustomCard),
      map(action =>
        YoutubeActions.createCustomCardSucces({
          card: customCardService.createCard(action.card),
        }),
      ),
    ),
  { functional: true },
)

// TODO: repeating logic in these two effects

export const nextPageEffect = createEffect(
  (
    searchService = inject(SearchService),
    actions = inject(Actions),
    store: Store<{ youtube: State }> = inject(Store),
  ) =>
    actions.pipe(
      ofType(YoutubeActions.nextPage),
      exhaustMap(() =>
        store.select('youtube', 'nextPage').pipe(
          take(1),
          filter(isNotNullable),
          mergeMap(token =>
            searchService.search('', token).pipe(
              map(data =>
                YoutubeActions.nextPageSuccess({
                  data,
                }),
              ),
            ),
          ),
        ),
      ),
    ),
  { functional: true },
)

export const prevPageEffect = createEffect(
  (
    searchService = inject(SearchService),
    actions = inject(Actions),
    store: Store<{ youtube: State }> = inject(Store),
  ) =>
    actions.pipe(
      ofType(YoutubeActions.prevPage),
      exhaustMap(() =>
        store.select('youtube', 'prevPage').pipe(
          take(1),
          filter(isNotNullable),
          mergeMap(token =>
            searchService
              .search('', token)
              .pipe(
                map(data =>
                  YoutubeActions.nextPageSuccess({ data }),
                ),
              ),
          ),
        ),
      ),
    ),
  { functional: true },
)
