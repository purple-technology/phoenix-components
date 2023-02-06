import styled from 'styled-components'

export const GalleryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, max-content));
	margin: 0 auto;
	border-top: 1px dashed
		${({ theme }): string => theme.tokens.color.border.secondary};
	border-left: 1px dashed
		${({ theme }): string => theme.tokens.color.border.secondary};
	max-width: 800px;
`

export const GalleryGridItem = styled.div`
	border-right: 1px dashed
		${({ theme }): string => theme.tokens.color.border.secondary};
	border-bottom: 1px dashed
		${({ theme }): string => theme.tokens.color.border.secondary};
	text-align: center;
	padding: 12px;
	height: 120px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
