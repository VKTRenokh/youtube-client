export type SortCriteria = 'date' | 'views'

export interface SortOptions {
  direction: number
  criteria: SortCriteria
}
