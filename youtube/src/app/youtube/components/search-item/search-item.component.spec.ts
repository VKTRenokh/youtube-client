import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing'

import { SearchItemComponent } from './search-item.component'
import { provideMockStore } from '@ngrx/store/testing'
import { VideoItem } from '../../models/response.model'
import { inputSignal } from '../../../utils/input-signal'

describe('SearchItemComponent', () => {
  const item: VideoItem = {
    id: 'aboba',
    etag: 'asdfsdfsdf32432',
    kind: 'youtube#vidoe',
    snippet: {
      description: 'description',
      title: 'Title1',
      tags: ['tag'],
      channelId: 'channelId234234',
      localized: {
        title: 'тайтл',
        description: 'описание',
      },
      categoryId: 'idCategory',
      thumbnails: {
        high: {
          url: 'https://github.com',
          width: 10,
          height: 10,
        },
        maxres: {
          url: 'https://youtube.com',
          width: 10,
          height: 10,
        },
        medium: {
          url: 'https://discord.com',
          width: 40,
          height: 40,
        },
        default: { url: '', width: 0, height: 0 },
        standard: { url: '', width: 0, height: 0 },
      },
      publishedAt: new Date().toString(),
      channelTitle: 'zxc ghoul',
      defaultAudioLanguage: 'EN',
      liveBroadcastContent: '????',
    },
    statistics: {
      likeCount: '10567',
      viewCount: '3423554234',
      commentCount: '90809809234',
      dislikeCount: '0',
      favoriteCount: '4235',
    },
  }

  const initialState = {
    youtube: { data: [item] },
    favorites: { data: [] },
  }

  let component: SearchItemComponent
  let fixture: ComponentFixture<SearchItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchItemComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents()

    fixture = TestBed.createComponent(SearchItemComponent)
    component = fixture.componentInstance
    component.item = inputSignal(item)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
