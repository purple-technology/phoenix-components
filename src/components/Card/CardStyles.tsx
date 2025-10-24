import styled, { css, RuleSet } from 'styled-components'

import { getBoxShadow } from '../../tokens/helpers'
import { marginCss, paddingCss } from '../common/Spacing/SpacingStyles'
import { CardProps } from './index'

export const StyledCard = styled.div<CardProps>`
	border-radius: ${({ theme }): string => theme.tokens.card.borderRadius};
	background-color: ${({ theme, disabled }): string =>
		disabled
			? theme.tokens.card.color.background.primaryDisabled
			: theme.tokens.card.color.background.primary};
	box-shadow: ${({ theme, elevated, disabled }): string =>
		elevated && !disabled ? getBoxShadow(theme.tokens.card.boxShadow) : 'none'};
	border: 1px solid
		${({ theme, disabled, elevated }): string =>
			disabled
				? theme.tokens.card.color.border.disabled
				: elevated
					? theme.tokens.card.color.border.elevated
					: theme.tokens.card.color.border.base};

	${({ onClick, theme, disabled }): RuleSet =>
		onClick
			? css`
					transition: border-color ${theme.tokens.duration.transition.base};
					cursor: ${disabled ? 'not-allowed' : 'pointer'};

					&:hover {
						border-color: ${
							disabled
								? theme.tokens.card.color.border.disabled
								: theme.tokens.card.color.border.interaction
						};
					}
			  `
			: css`
					cursor: default;
			  `}

	${paddingCss}
	${marginCss}
`
