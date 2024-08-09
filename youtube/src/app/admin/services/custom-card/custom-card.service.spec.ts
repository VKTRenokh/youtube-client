import { TestBed } from '@angular/core/testing'

import { CustomCardService } from './custom-card.service'
import {
  CustomCardInfo,
  CustomCard,
} from '../../models/custom-card.model'

const uuidRegexp =
  /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/

describe('CustomCardService', () => {
  let service: CustomCardService

  const baseCard: CustomCardInfo = {
    tags: ['tag'],
    title: 'Title',
    createdAt: new Date().toString(),
    imageLink: 'https://github.com',
    videoLink: 'https://github.com',
    description: 'Hello World',
  }

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CustomCardService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should correctly createCard', () => {
    const card = service.createCard(baseCard)

    expect(card.isCustom).toBeTruthy()
    expect(card.id).toMatch(uuidRegexp)
  })

  it('should not modify base card', () => {
    const card = service.createCard(baseCard)
    expect(
      Object.entries(baseCard).every(
        ([key, value]) =>
          card[key as keyof CustomCard] === value,
      ),
    ).toBeTruthy()
  })
})
