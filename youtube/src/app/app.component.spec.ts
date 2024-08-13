import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { provideLogger } from './core/providers/logger/logger.provider'
import { provideMockStore } from '@ngrx/store/testing'

describe('AppComponent', () => {
  const initialState = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideLogger(),
        provideMockStore({ initialState }),
      ],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
