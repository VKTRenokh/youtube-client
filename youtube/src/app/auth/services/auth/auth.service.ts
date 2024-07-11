import { Injectable, inject, signal } from '@angular/core'
import { LocalStorageService } from '../../../core/services/local-storage.service'
import { generateToken } from '../../utils/generate-token'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authKey = 'fakeJWT'
  private localStorageService = inject(LocalStorageService)

  private _isLogined = signal(
    !!this.localStorageService.get(this.authKey),
  )
  public isLogined = this._isLogined.asReadonly()

  public login() {
    this._isLogined.set(true)

    this.localStorageService.set(
      this.authKey,
      generateToken(),
    )
  }

  public logout() {
    this._isLogined.set(false)
    this.localStorageService.remove(this.authKey)
  }
}
