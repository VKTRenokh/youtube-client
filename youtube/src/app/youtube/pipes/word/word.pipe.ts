import { Pipe, PipeTransform } from '@angular/core'
import { SearchVideoItem } from '../../models/response.model'
import { getTitle } from '../../utils/get-title'

@Pipe({
  name: 'word',
  standalone: true,
})
export class WordPipe implements PipeTransform {
  private createFilter(word: string | null) {
    return (item: SearchVideoItem) =>
      getTitle(item).includes(word ?? '')
  }

  public transform(
    items: SearchVideoItem[] | null,
    filterWord: string | null,
  ): SearchVideoItem[] {
    return items
      ? items.filter(this.createFilter(filterWord))
      : []
  }
}
