export const TextColor = ['darkest', 'dark', 'light', 'lightest'] as const

export type TextColor = typeof TextColor[number]
