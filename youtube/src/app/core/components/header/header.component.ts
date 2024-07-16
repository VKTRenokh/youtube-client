import { NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core'
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms'
import { ButtonComponent } from '../../../shared/components/button/button.component'
import { UserInfoComponent } from '../user-info/user-info.component'
import { SearchService } from '../../../youtube/services/search/search.service'
import { FilterService } from '../../../youtube/services/filter/filter.service'
import { Router } from '@angular/router'
import { AuthService } from '../../../auth/services/auth/auth.service'
import { debounceTime, filter, switchMap } from 'rxjs'
import { searchTimeout } from '../../constants/search-timeout.constant'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { isNotNullable } from '../../../shared/utils/is-not-nullable'

@Component({
  selector: 'yt-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
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

  public searchString = new FormControl('')

  public constructor() {
    this.searchString.valueChanges
      .pipe(
        filter(isNotNullable),
        filter(string => string.length > 3),
        debounceTime(searchTimeout),
        switchMap(search =>
          this.searchService.search(search),
        ),
        takeUntilDestroyed(),
      )
      .subscribe({
        next: console.log,
        error: console.error,
      })
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
