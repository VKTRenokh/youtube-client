import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { AdminComponent } from './admin.component'
import { provideMockStore } from '@ngrx/store/testing'

describe('AdminComponent', () => {
  const initialState = {}
  let component: AdminComponent
  let fixture: ComponentFixture<AdminComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents()

    fixture = TestBed.createComponent(AdminComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
