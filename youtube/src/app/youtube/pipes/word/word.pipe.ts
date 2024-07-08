import { Pipe, PipeTransform } from '@angular/core'
import { VideoItem } from '../../models/response.model'
import { getTitle } from '../../utils/get-title'

@Pipe({
  name: 'word',
  standalone: true,
})
export class WordPipe implements PipeTransform {
  private createFilter(word: string | null) {
    return (item: VideoItem) =>
      getTitle(item).includes(word ?? '')
  }

  public transform(
    items: VideoItem[],
    filterWord: string | null,
  ): VideoItem[] {
    return items.filter(this.createFilter(filterWord))
  }
}
