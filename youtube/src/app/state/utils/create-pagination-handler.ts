import { Action, Store } from '@ngrx/store'
import { VideosResponse } from '../../youtube/models/response.model'
import { SearchService } from '../../youtube/services/search/search.service'
import {
  exhaustMap,
  filter,
  map,
  mergeMap,
  take,
} from 'rxjs'
import { isNotNullable } from '../../shared/utils/is-not-nullable'
import { State } from '../reducers/youtube.reducer'

export const createPaginationHandler = (
  successAction: (props: {
    data: VideosResponse
  }) => { data: VideosResponse } & Action<string>,
  store: Store<{ youtube: State }>,
  searchService: SearchService,
  direction: 'nextPage' | 'prevPage',
) =>
  exhaustMap(() =>
    store.select('youtube', direction).pipe(
      take(1),
      filter(isNotNullable),
      mergeMap(token =>
        searchService
          .search('', token)
          .pipe(map(data => successAction({ data }))),
      ),
    ),
  )
