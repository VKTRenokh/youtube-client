import { Action, Store } from '@ngrx/store'
import { SearchService } from '../../youtube/services/search/search.service'
import {
  exhaustMap,
  filter,
  map,
  switchMap,
  take,
} from 'rxjs'
import { isNotNullable } from '../../shared/utils/is-not-nullable'
import { State } from '../reducers/youtube.reducer'
import { VideosResponseData } from '../actions/youtube.actions'

const createPaginationHandler =
  (direction: 'nextPage' | 'prevPage') =>
  (
    successAction: (
      props: VideosResponseData,
    ) => VideosResponseData & Action<string>,
    store: Store<{ youtube: State }>,
    searchService: SearchService,
  ) =>
    exhaustMap(() =>
      store.select('youtube', direction).pipe(
        take(1),
        filter(isNotNullable),
        switchMap(token =>
          searchService
            .search('', token)
            .pipe(map(data => successAction({ data }))),
        ),
      ),
    )

export const previousPagePagination =
  createPaginationHandler('prevPage')

export const nextPagePagination =
  createPaginationHandler('nextPage')
