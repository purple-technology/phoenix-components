import { Story } from '@storybook/react'
import styled from 'styled-components'

import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { CardProps } from '.'

const getCardType = (elevated?: boolean): 'elevated' | 'default' =>
	elevated ? 'elevated' : 'default'

export const StyledCard: Story = styled.div<CardProps>`
	border: 1px solid;
	border-radius: ${({ theme }): string => theme.tokens.ref.borderRadius.lg};
	background-color: #fff;
	${({ elevated, theme }): string => `
			box-shadow: ${elevated ? theme.tokens.card.boxShadow : 'none'}};
			border-color: ${theme.tokens.card.color.border[getCardType(elevated)].base};
		`};
	${({ onClick, theme, elevated, disabled }): string =>
		onClick
			? `
			transition: border-color ${theme.tokens.ref.transition.duration.base};
			cursor: pointer;
			&:hover {
				border-color: ${
					disabled
						? theme.tokens.card.color.border[getCardType(elevated)].base
						: theme.tokens.card.color.border[getCardType(elevated)].interaction
				};
			}
	`
			: ''}

	cursor: ${({ disabled, onClick }): string =>
		disabled ? 'not-allowed' : onClick ? 'pointer' : 'default'};
	opacity: ${({ disabled }): number => (disabled ? 0.4 : 1)};

	// Padding
	${paddingCss}

	// Margin
	${marginCss}
`
