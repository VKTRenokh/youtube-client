import { HttpRequest } from '@angular/common/http'

export const isGet = (req: HttpRequest<unknown>) =>
  req.method === 'GET'
