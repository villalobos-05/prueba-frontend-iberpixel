export const sortValues = ['none', 'asc', 'desc'] as const
export type SortType = (typeof sortValues)[number]
