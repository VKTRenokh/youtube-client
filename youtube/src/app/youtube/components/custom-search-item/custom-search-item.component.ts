import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core'
import { CustomCard } from '../../../admin/models/custom-card.model'
import { NgOptimizedImage } from '@angular/common'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { Store } from '@ngrx/store'

@Component({
  selector: 'yt-custom-search-item',
  standalone: true,
  imports: [NgOptimizedImage, ButtonComponent],
  templateUrl: './custom-search-item.component.html',
  styleUrl: './custom-search-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSearchItemComponent {
  private store = inject(Store)

  public item = input.required<CustomCard>()
}
