export const sortValues = ['none', 'asc', 'desc'] as const
export type SortType = (typeof sortValues)[number]

export enum SortEnum {
  none = 'No ordenar',
  asc = 'Asc ⬆️',
  desc = 'Des ⬇️',
}
