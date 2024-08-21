import { Injectable } from '@angular/core'
import {
  CustomCard,
  CustomCardInfo,
} from '../../models/custom-card.model'

@Injectable({
  providedIn: 'root',
})
export class CustomCardService {
  public createCard(cardInfo: CustomCardInfo): CustomCard {
    return {
      ...cardInfo,
      isCustom: true,
      id: crypto.randomUUID(),
    }
  }
}
