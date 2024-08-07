import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { ButtonComponent } from './button.component'
import { InputSignal, signal } from '@angular/core'

const inputSignal = <T>(value: T) =>
  signal(value) as unknown as InputSignal<T>

describe('ButtonComponent', () => {
  let component: ButtonComponent
  let fixture: ComponentFixture<ButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonComponent)
    component = fixture.componentInstance
    component.ariaLabel = inputSignal('button')
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
