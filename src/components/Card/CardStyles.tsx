import { Story } from '@storybook/react'
import styled from 'styled-components'

import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { CardProps } from '.'

const getCardType = (elevated?: boolean): 'elevated' | 'default' =>
	elevated ? 'elevated' : 'default'

export const StyledCard: Story = styled.div<CardProps>`
	border: 1px solid;
	border-radius: ${({ theme }): string => theme.$pc.borderRadius['large']};
	background-color: #fff;
	${({ elevated, theme }): string => `
			box-shadow: ${theme.$pc.card[getCardType(elevated)].boxShadow};
			border-color: ${theme.$pc.card[getCardType(elevated)].borderColor};
		`};
	${({ onClick, theme, elevated, disabled }): string =>
		onClick
			? `
			transition: border-color ${theme.$pc.transitionDuration};
			cursor: pointer;
			&:hover {
				border-color: ${
					disabled
						? theme.$pc.card[getCardType(elevated)].borderColor
						: theme.$pc.card[getCardType(elevated)].borderColorHover
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
