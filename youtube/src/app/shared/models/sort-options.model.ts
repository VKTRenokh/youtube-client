export type SortCriteria = 'date' | 'views'

export const enum Directions {
  Ascending = 1,
  Descending = -1,
}

export interface SortOptions {
  direction: number
  criteria: SortCriteria
}
