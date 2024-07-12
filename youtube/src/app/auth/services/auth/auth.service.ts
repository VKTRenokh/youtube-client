import { Injectable, inject, signal } from '@angular/core'
import { generateToken } from '../../utils/generate-token'
import { LocalStorageService } from '../../../core/services/local-storage/local-storage.service'
import { LOGGER_TOKEN } from '../../../core/providers/logger/logger.provider'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authKey = 'fakeJWT'
  private localStorageService = inject(LocalStorageService)
  private logger = inject(LOGGER_TOKEN)

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

    this.logger.log('Logined.')
  }

  public logout() {
    this._isLogined.set(false)
    this.localStorageService.remove(this.authKey)

    this.logger.log('Logged out.')
  }
}
