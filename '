import {
  Injectable,
  InjectionToken,
  inject,
} from '@angular/core'

export const BROWSER_STORAGE = new InjectionToken<Storage>(
  'Browser Storage',
  {
    providedIn: 'root',
    factory: () => localStorage,
  },
)

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage = inject(BROWSER_STORAGE)

  public get(key: string) {
    return this.storage.getItem(key)
  }

  public set(key: string, value: string) {
    return this.storage.setItem(key, value)
  }

  public remove(key: string) {
    return this.storage.removeItem(key)
  }
}
