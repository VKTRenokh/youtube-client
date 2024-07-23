import { Injectable, inject } from '@angular/core'
import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects'
import { YoutubeActions } from '../actions/youtube.actions'
import { catchError, exhaustMap, map, of } from 'rxjs'
import { SearchService } from '../../youtube/services/search/search.service'

@Injectable()
export class YoutubeEffects {
  private actions = inject(Actions)
  private searchService = inject(SearchService)

  public search = createEffect(() =>
    this.actions.pipe(
      ofType(YoutubeActions.searchVideos),
      exhaustMap(type =>
        this.searchService.search(type.query).pipe(
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
  )
}
