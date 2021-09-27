import styled from 'styled-components'

export const GalleryGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, max-content));
	margin: 0 auto;
	border-top: 1px dashed ${({ theme }): string => theme.$pc.colors.borderHr};
	border-left: 1px dashed ${({ theme }): string => theme.$pc.colors.borderHr};
	max-width: 800px;
`

export const GalleryGridItem = styled.div`
	border-right: 1px dashed ${({ theme }): string => theme.$pc.colors.borderHr};
	border-bottom: 1px dashed ${({ theme }): string => theme.$pc.colors.borderHr};
	text-align: center;
	padding: 12px;
	height: 120px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
