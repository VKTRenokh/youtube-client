import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { ColoredBorderDirective } from '../../directives/colored-border.directive'
import { VideoItem } from '../../models/response.model'
import { Router } from '@angular/router'
import { VideoStatisticsComponent } from '../video-statistics/video-statistics.component'

@Component({
  selector: 'yt-search-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    ColoredBorderDirective,
    VideoStatisticsComponent,
  ],
  templateUrl: './search-item.component.html',
  styleUrl: './search-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchItemComponent {
  public router = inject(Router)

  public item = input.required<VideoItem>()

  public snippet = computed(() => this.item().snippet)
  public smallThumbnail = computed(
    () => this.snippet().thumbnails.default,
  )

  public navigateToDetailedPage() {
    this.router.navigate([this.item().id])
  }
}
