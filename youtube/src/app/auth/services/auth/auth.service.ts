import { Injectable, inject, signal } from '@angular/core'
import { generateToken } from '../../utils/generate-token'
import { LOGGER_TOKEN } from '../../../core/providers/logger/logger.provider'
import { StorageService } from '../../../core/services/storage/storage.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authKey = 'fakeJWT'
  private logger = inject(LOGGER_TOKEN)
  private storageService = inject(StorageService)

  private _isLogined = signal(
    !!this.storageService.get(this.authKey),
  )
  public isLogined = this._isLogined.asReadonly()

  public login() {
    this._isLogined.set(true)

    this.storageService.set(this.authKey, generateToken())

    this.logger.log('Logined.')
  }

  public logout() {
    this._isLogined.set(false)
    this.storageService.remove(this.authKey)

    this.logger.log('Logged out.')
  }
}
