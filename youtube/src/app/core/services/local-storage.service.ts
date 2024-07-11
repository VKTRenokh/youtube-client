import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public get(key: string) {
    return localStorage.getItem(key)
  }

  public set(key: string, value: string) {
    return localStorage.setItem(key, value)
  }

  public remove(key: string) {
    return localStorage.removeItem(key)
  }
}
