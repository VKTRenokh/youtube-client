export interface CustomCardInfo {
  description: string
  imageLink: string
  createdAt: string
  videoLink: string
  tags: string[]
  title: string
}

export interface CustomCard extends CustomCardInfo {
  isCustom: boolean
  id: string
}

export const isCustomCard = (
  thing: unknown,
): thing is CustomCard =>
  typeof thing === 'object' &&
  !!thing &&
  'isCustom' in thing &&
  thing.isCustom === true
