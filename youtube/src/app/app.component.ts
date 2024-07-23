import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './core/components/header/header.component'
import { Store, select } from '@ngrx/store'
import { YoutubeActions } from './state/actions/youtube.actions'
import { State } from './state/reducers/youtube.reducer'

@Component({
  selector: 'yt-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private store = inject(Store<State>)
  public data = this.store.pipe(
    select(state => state.youtube.data),
  )

  public something() {
    this.store.dispatch(
      YoutubeActions.searchVideos({ query: 'angular' }),
    )

    this.data.subscribe(console.log)
  }
}
