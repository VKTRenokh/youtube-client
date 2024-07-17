import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core'
import { SearchService } from '../../services/search/search.service'
import {
  AsyncPipe,
  DatePipe,
  NgOptimizedImage,
} from '@angular/common'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { ActivatedRoute, Router } from '@angular/router'
import { ColoredBorderDirective } from '../../directives/colored-border.directive'
import { VideoStatisticsComponent } from '../video-statistics/video-statistics.component'
import { Observable, filter, map, switchMap } from 'rxjs'
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
    AsyncPipe,
  ],
  templateUrl: './video-detailed-info.component.html',
  styleUrl: './video-detailed-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDetailedInfoComponent {
  private searchService = inject(SearchService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  public video: Observable<SearchVideoItem> =
    this.route.params.pipe(
      map(params => params['id']),
      filter(isString),
      switchMap(id => this.searchService.getVideoById(id)),
      filter(isNotNullable),
    )

  public navigateToTheMainPage() {
    this.router.navigate(['/'])
  }
}
