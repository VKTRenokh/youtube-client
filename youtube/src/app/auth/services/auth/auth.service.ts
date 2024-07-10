import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLogined = signal(false)
  public isLogined = this._isLogined.asReadonly()

  public login() {
    this._isLogined.set(true)
  }

  public logout() {
    this._isLogined.set(false)
  }
}
