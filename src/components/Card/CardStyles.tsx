import { Story } from '@storybook/react'
import styled from 'styled-components'

import { getBoxShadow } from '../../tokens/helpers'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { CardProps } from '.'

export const StyledCard: Story = styled.div<CardProps>`
	border: 1px solid;
	border-radius: ${({ theme }): string => theme.tokens.ref.borderRadius.md};
	background-color: ${({ theme }): string =>
		theme.tokens.card.color.background.primary};
	${({ elevated, disabled, theme }): string => `
			box-shadow: ${elevated ? getBoxShadow(theme.tokens.card.boxShadow) : 'none'}};
			border-color: ${
				disabled
					? theme.tokens.card.color.border.disabled
					: elevated
					? theme.tokens.card.color.border.elevated
					: theme.tokens.card.color.border.base
			};
		`};
	${({ onClick, theme, disabled }): string =>
		onClick
			? `
			transition: border-color ${theme.tokens.ref.transition.duration.base};
			cursor: pointer;
			&:hover {
				border-color: ${
					disabled
						? theme.tokens.card.color.border.disabled
						: theme.tokens.card.color.border.interaction
				};
			}
	`
			: ''}

	cursor: ${({ disabled, onClick }): string =>
		disabled ? 'not-allowed' : onClick ? 'pointer' : 'default'};

	// Padding
	${paddingCss}

	// Margin
	${marginCss}
`
