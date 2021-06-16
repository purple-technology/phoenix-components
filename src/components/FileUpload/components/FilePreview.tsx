import React from 'react'
import { Document, Page } from 'react-pdf'
import styled, { css } from 'styled-components'

import { FileWithPreview } from '../index'

interface FilePreviewProps {
	file: FileWithPreview
}

const commonFilePreviewStyles = css`
	max-width: 90%;
	padding: 10px;
	margin: 0 auto;
	border: 1px solid ${({ theme }): string => theme.$pc.colors.borderDisabled};
	border-radius: ${({ theme }): string => theme.$pc.borderRadius.small};
	z-index: 999;
`

const StyledFilePreview = styled.img`
	${commonFilePreviewStyles}
	max-height: 300px;
`

const StyledPdfFilePreview = styled.div`
	${commonFilePreviewStyles}
	max-height: 150px;
	overflow: hidden;
`

const FilePreview: React.FC<FilePreviewProps> = ({ file }) => {
	return (
		<div>
			{file.name.endsWith('.pdf') ? (
				<StyledPdfFilePreview>
					<Document file={file}>
						<Page pageNumber={1} scale={0.175} />
					</Document>
				</StyledPdfFilePreview>
			) : (
				<StyledFilePreview src={file.preview} />
			)}
		</div>
	)
}

export default FilePreview
