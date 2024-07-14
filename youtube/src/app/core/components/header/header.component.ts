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
import { Router } from '@angular/router'
import { AuthService } from '../../../auth/services/auth/auth.service'

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
  private authService = inject(AuthService)
  private router = inject(Router)

  public searchValue = ''

  public onSearch() {
    this.searchService.search()
  }

  public onOpenFiltersButtonClick() {
    this.filterService.toggleIsFilteringShown()
  }

  public navigateToMainPage() {
    this.router.navigate(['/'])
  }

  public logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
