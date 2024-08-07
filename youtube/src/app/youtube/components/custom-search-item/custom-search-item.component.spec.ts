import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { CustomSearchItemComponent } from './custom-search-item.component'
import { provideMockStore } from '@ngrx/store/testing'
import { InputSignal, signal } from '@angular/core'
import { CustomCard } from '../../../admin/models/custom-card.model'

const inputSignal = <T>(value: T) =>
  signal(value) as unknown as InputSignal<T>

describe('CustomSearchItemComponent', () => {
  let component: CustomSearchItemComponent
  let fixture: ComponentFixture<CustomSearchItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSearchItemComponent],
      providers: [provideMockStore({})],
    }).compileComponents()

    fixture = TestBed.createComponent(
      CustomSearchItemComponent,
    )
    component = fixture.componentInstance
    component.item = inputSignal<CustomCard>({
      id: 'id',
      tags: ['tag'],
      title: 'Title',
      isCustom: true,
      createdAt: new Date().toString(),
      imageLink: 'https://github.com',
      videoLink: 'https://github.com',
      description: 'Aalalalala',
    })
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
