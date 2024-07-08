import { Pipe, PipeTransform } from '@angular/core'
import { VideoItem } from '../interfaces/response'
import { getPublishDate } from '../utils/get-publish-date'
import { getViewsCount } from '../utils/get-views-count'
import {
  SortOptions,
  SortCriteria,
} from '../../shared/models/sort-options.model'

type SortMap = Record<
  SortCriteria,
  (a: VideoItem, b: VideoItem) => number
>

// TODO: use functional lens maybe?
const sortMap: SortMap = {
  date: (a, b) => +getPublishDate(b) - +getPublishDate(a),
  views: (a, b) => +getViewsCount(b) - +getViewsCount(a),
}

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  public transform(
    value: VideoItem[] | null,
    criterias: SortOptions | null,
  ): VideoItem[] {
    return value && criterias
      ? value.sort(
          (a, b) =>
            sortMap[criterias.criteria](a, b) *
            criterias.direction,
        )
      : value ?? []
  }
}
