import styled, { DefaultTheme } from 'styled-components'

import { ComponentSize } from '../../enum/ComponentSize'
import { ColorTheme } from '../../theme/ColorTheme'

export const getDashedBorder = (
	theme: DefaultTheme,
	error: string | boolean,
	isDragActive: boolean
) => {
	let color = error
		? theme.colors[ColorTheme.ERROR].dark
		: isDragActive
		? theme.colors.borderInputHover
		: theme.colors.borderInput

	// Remove # from HEX color
	color = color.slice(1)

	return `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23${color}' stroke-width='2' stroke-dasharray='8%2c8' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");`
}

export const Remove = styled.div`
	position: absolute;
	top: 1px;
	right: 8px;
	width: 20px;
	height: 20px;
	z-index: 9;
	color: ${({ theme }) => theme.colors[ColorTheme.ERROR].dark};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover {
		filter: brightness(0.9);
	}
`

export const PreviewFilesWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	width: 100%;
`
export const SinglePreview = styled.div``

export const RelativeWrap = styled.div`
	max-width: 140px;
	position: relative;
`

export const Wrapper = styled.div`
	max-width: 600px;
	width: 100%;
`

interface StyledUploadProps {
	error: string | boolean
	isDragActive: boolean
}

export const StyledUpload = styled.div<StyledUploadProps>`
	padding: 25px;
	text-align: center;
	width: 100%;
	outline: none;
	box-sizing: border-box;
	transition: background-image 0.3s;

	/** Used this generator */
	/** https://kovart.github.io/dashed-border-generator/ */
	background-image: ${({ theme, error, isDragActive }) =>
		getDashedBorder(theme, error, isDragActive)};

	border-radius: ${({ theme }) => theme.borderRadius[ComponentSize.LARGE]};

	button {
		margin: 0 auto;
	}
`

export const DragText = styled.div`
	margin-bottom: 1rem;
`

export const Icon = styled.img`
	margin-bottom: 1rem;
`
