import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { ButtonComponent } from './button.component'
import { inputSignal } from '../../../utils/input-signal'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

describe('ButtonComponent', () => {
  let component: ButtonComponent
  let fixture: ComponentFixture<ButtonComponent>
  let button: DebugElement
  let onClickSpy: jest.SpyInstance

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonComponent)
    component = fixture.componentInstance
    component.ariaLabel = inputSignal('asdf')
    fixture.detectChanges()
    button = fixture.debugElement.query(
      By.css('button.youtube-button'),
    )
    onClickSpy = jest.spyOn(component, 'onClick')
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should be unstyled if variant is unstyled', async () => {
    const buttonElement: HTMLButtonElement =
      button.nativeElement
    fixture.componentRef.setInput('variant', 'unstyled')

    fixture.detectChanges()
    await fixture.whenStable()

    expect(
      buttonElement.classList.contains('styled'),
    ).toBeFalsy()
  })

  it('should correctly handle clicks', () => {
    button.triggerEventHandler('click')

    expect(onClickSpy).toHaveBeenCalled()
  })

  it('should not handle clicks if button is disabled', async () => {
    fixture.componentRef.setInput('disabled', false)

    button.nativeElement.click()

    expect(onClickSpy).not.toHaveBeenCalled()
  })
})
