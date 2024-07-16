import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  input,
} from '@angular/core'
import { SearchService } from '../../services/search/search.service'
import { DatePipe, NgOptimizedImage } from '@angular/common'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { ActivatedRoute, Router } from '@angular/router'
import { ColoredBorderDirective } from '../../directives/colored-border.directive'
import { VideoStatisticsComponent } from '../video-statistics/video-statistics.component'
import { filter, map, switchMap, tap } from 'rxjs'
import { isNotNullable } from '../../../shared/utils/is-not-nullable'
import { isString } from '../../../shared/utils/is-string'
import { SearchVideoItem } from '../../models/response.model'

@Component({
  selector: 'yt-video-detailed-info',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    ColoredBorderDirective,
    DatePipe,
    VideoStatisticsComponent,
  ],
  templateUrl: './video-detailed-info.component.html',
  styleUrl: './video-detailed-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDetailedInfoComponent implements OnInit {
  private searchService = inject(SearchService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  public id = input.required<string>()

  public video: SearchVideoItem | null = null

  public ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => params['id']),
        filter(isString),
        switchMap(id =>
          this.searchService.getVideoById(id),
        ),
        filter(isNotNullable),
      )
      .subscribe(video => {
        console.log('test', video)
        this.video = video
      })
  }

  public navigateToTheMainPage() {
    this.router.navigate(['/'])
  }

  public getThumbnail() {
    if (!this.video) {
      return
    }

    return this.video.snippet.thumbnails.high
  }
}
