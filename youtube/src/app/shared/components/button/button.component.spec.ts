import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { ButtonComponent } from './button.component'
import { inputSignal } from '../../../utils/input-signal'
import { By } from '@angular/platform-browser'

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

  it('should be unstyled if variant is unstyled', async () => {
    const button: HTMLButtonElement =
      fixture.debugElement.query(
        By.css('button.youtube-button'),
      ).nativeElement

    fixture.componentRef.setInput('variant', 'unstyled')

    fixture.detectChanges()
    await fixture.whenStable()

    expect(button.classList.contains('styled')).toBeFalsy()
  })
})
