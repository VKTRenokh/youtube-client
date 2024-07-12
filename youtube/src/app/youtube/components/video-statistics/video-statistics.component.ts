import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core'

@Component({
  selector: 'yt-video-statistics',
  standalone: true,
  imports: [],
  templateUrl: './video-statistics.component.html',
  styleUrl: './video-statistics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoStatisticsComponent {
  public statistics = input.required()
}
