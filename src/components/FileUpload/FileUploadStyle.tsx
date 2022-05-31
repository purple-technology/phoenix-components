import styled, { DefaultTheme } from 'styled-components'

export const getDashedBorder = (
	theme: DefaultTheme,
	error: string | boolean,
	isDragActive: boolean
): string => {
	let color = error
		? theme.$pc.colors['error'].dark
		: isDragActive
		? theme.$pc.colors.borderInputHover
		: theme.$pc.colors.borderInput

	/** Remove # from HEX color */
	color = color.slice(1)

	/** Used this generator */
	/** https://kovart.github.io/dashed-border-generator/ */
	return `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23${color}' stroke-width='2' stroke-dasharray='8%2c8' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");`
}

export const Remove = styled.div`
	position: absolute;
	top: 3px;
	right: 9px;
	width: 20px;
	height: 20px;
	color: ${({ theme }): string => theme.$pc.colors['error'].dark};
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
	grid-template-columns: repeat(
		auto-fit,
		minmax(
			${({ theme }): number => theme.$pc.fileUpload.preview.minSize}px,
			1fr
		)
	);
	justify-items: center;
	grid-gap: 0 12px;
`

export const RelativeWrap = styled.div`
	position: relative;
	border: 1px solid ${({ theme }): string => theme.$pc.colors.borderDisabled};
	border-radius: ${({ theme }): string => theme.$pc.borderRadius.medium};
	margin-bottom: 12px;
	width: 100%;
	max-width: ${({ theme }): number => theme.$pc.fileUpload.preview.maxSize}px;

	&::before {
		content: '';
		display: block;
		padding-top: 100%;
	}
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
	padding: 24px;
	text-align: center;
	width: 100%;
	outline: none;
	box-sizing: border-box;
	transition: background-image 0.3s;

	background-image: ${({ theme, error, isDragActive }): string =>
		getDashedBorder(theme, error, isDragActive)};

	border-radius: ${({ theme }): string => theme.$pc.borderRadius['large']};

	button {
		margin: 0 auto;
	}
`

export const Label = styled.div`
	margin-bottom: 1rem;
`

export const LabelDesktop = styled.div`
	@media (hover: none) {
		display: none;
	}
`

export const LabelTouchDevice = styled.div`
	@media (hover: hover) {
		display: none;
	}
`

export const UploadIcon = styled.img`
	margin-bottom: 1rem;
`
