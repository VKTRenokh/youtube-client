import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { ButtonComponent } from './button.component'
import { inputSignal } from '../../../utils/input-signal'

describe('ButtonComponent', () => {
  let component: ButtonComponent
  let fixture: ComponentFixture<ButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonComponent)
    component = fixture.componentInstance
    component.ariaLabel = inputSignal('asdf')
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
