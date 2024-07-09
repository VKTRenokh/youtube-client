import { NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { UserInfoComponent } from '../user-info/user-info.component'
import { SearchService } from '../../../youtube/services/search/search.service'
import { FilterService } from '../../../youtube/services/filter/filter.service'

@Component({
  selector: 'yt-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    ButtonComponent,
    UserInfoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private searchService = inject(SearchService)
  private filterService = inject(FilterService)

  public searchValue = ''

  public onSearch() {
    this.searchService.search()
  }

  public onOpenFiltersButtonClick() {
    this.filterService.toggleIsFilteringShown()
  }
}
