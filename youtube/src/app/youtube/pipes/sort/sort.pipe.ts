import { Pipe, PipeTransform } from '@angular/core'
import {
  SortCriteria,
  SortOptions,
} from '../../../shared/models/sort-options.model'
import { getPublishDate } from '../../utils/get-publish-date'
import { getViewsCount } from '../../utils/get-views-count'
import { SearchVideoItem } from '../../models/response.model'

type SortMap = Record<
  SortCriteria,
  (a: SearchVideoItem, b: SearchVideoItem) => number
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
    value: SearchVideoItem[] | null,
    criterias: SortOptions | null,
  ): SearchVideoItem[] {
    return value && criterias
      ? value.sort(
          (a, b) =>
            sortMap[criterias.criteria](a, b) *
            criterias.direction,
        )
      : value ?? []
  }
}
