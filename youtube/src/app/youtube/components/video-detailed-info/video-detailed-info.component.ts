import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core'
import { SearchService } from '../../services/search/search.service'
import { DatePipe, NgOptimizedImage } from '@angular/common'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { Router } from '@angular/router'
import { ColoredBorderDirective } from '../../directives/colored-border.directive'

@Component({
  selector: 'yt-video-detailed-info',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    ColoredBorderDirective,
    DatePipe,
  ],
  templateUrl: './video-detailed-info.component.html',
  styleUrl: './video-detailed-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDetailedInfoComponent {
  private searchService = inject(SearchService)
  private router = inject(Router)

  public id = input.required<string>()

  public video = computed(() =>
    this.searchService.getVideoById(this.id()),
  )
  public snippet = computed(() => this.video()?.snippet)
  public thumbnail = computed(
    () => this.snippet()?.thumbnails.high,
  )
  public statistics = computed(
    () => this.video()?.statistics,
  )

  public navigateToTheMainPage() {
    this.router.navigate(['/'])
  }
}
