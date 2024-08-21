import { CustomCard } from '../../admin/models/custom-card.model'

export const isCardMatchingId =
  (id: string) => (card: CustomCard) =>
    card.id === id
