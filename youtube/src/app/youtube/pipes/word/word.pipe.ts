import { Pipe, PipeTransform } from '@angular/core'
import { getTitle } from '../../utils/get-title'
import { Item } from '../../models/item.model'

@Pipe({
  name: 'word',
  standalone: true,
})
export class WordPipe implements PipeTransform {
  private createFilter(word: string | null) {
    return (item: Item) =>
      getTitle(item).includes(word ?? '')
  }

  public transform(
    items: Item[] | null,
    filterWord: string | null,
  ): Item[] {
    return items
      ? items.filter(this.createFilter(filterWord))
      : []
  }
}
