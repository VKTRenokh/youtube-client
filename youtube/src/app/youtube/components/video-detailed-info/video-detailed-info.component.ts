import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core'

@Component({
  selector: 'yt-video-detailed-info',
  standalone: true,
  imports: [],
  templateUrl: './video-detailed-info.component.html',
  styleUrl: './video-detailed-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoDetailedInfoComponent {}
