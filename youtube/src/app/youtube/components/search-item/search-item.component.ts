import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { ColoredBorderDirective } from '../../directives/colored-border.directive'
import { VideoItem } from '../../models/response.model'

@Component({
  selector: 'yt-search-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    ColoredBorderDirective,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  public item = input.required<VideoItem>()

  public snippet = computed(() => this.item().snippet)
  public smallThumbnail = computed(
    () => this.snippet().thumbnails.default,
  )
}
