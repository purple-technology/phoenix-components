export const TextAlignment = ['left', 'center', 'right', 'justify'] as const

export type TextAlignment = (typeof TextAlignment)[number]
