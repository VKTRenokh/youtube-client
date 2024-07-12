import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core'
import { SearchService } from '../../services/search/search.service'
import { ActivatedRoute } from '@angular/router'
import { Subscription, filter, map, mergeMap } from 'rxjs'
import { getId } from '../../utils/get-id'
import { isNotNullable } from '../../utils/is-not-nullable'
import { VideoItem } from '../../models/response.model'

@Component({
  selector: 'yt-video-detailed-info',
  standalone: true,
  imports: [],
  templateUrl: './video-detailed-info.component.html',
  styleUrl: './video-detailed-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDetailedInfoComponent
  implements OnInit, OnDestroy
{
  private searchService = inject(SearchService)
  private route = inject(ActivatedRoute)
  private subscriptions = new Subscription()

  public videoInfo$ = this.route.params.pipe(
    map(getId),
    filter(isNotNullable),
    map((id) => this.searchService.getVideoById(id)),
  )

  public videoInfo: VideoItem | null = null

  public ngOnInit(): void {
    this.searchService.getVideoById('')
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
