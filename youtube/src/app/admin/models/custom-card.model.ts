export interface CustomCard {
  description: string
  imageLink: string
  createdAt: string
  videoLink: string
  tags: string[]
  title: string
  isCustom: boolean
}

export const isCustomCard = (
  thing: unknown,
): thing is CustomCard =>
  typeof thing === 'object' &&
  !!thing &&
  'isCustom' in thing &&
  thing.isCustom === true
