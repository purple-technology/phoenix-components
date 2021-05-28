import React from 'react'
import { Document, Page } from 'react-pdf'
import styled from 'styled-components'

import { FileWithPreview } from '../index'

interface FilePreviewProps {
	file: FileWithPreview
}

export const StyledFilePreview = styled.img`
	max-width: 90%;
	max-height: 300px;
	padding: 10px;
	box-sizing: border-box;
	margin: 0 auto;
	border: 1px solid #dedede;
	border-radius: 3px;
	z-index: 999;
`

// Must be copied because we can't inherit from a styled.img
// And can't go other way because TypeScript doesn't recognize polymorhphic props
export const StyledPdfFilePreview = styled.div`
	max-width: 90%;
	max-height: 150px;
	overflow: hidden;
	padding: 10px;
	box-sizing: border-box;
	margin: 0 auto;
	border: 1px solid #dedede;
	border-radius: 3px;
	z-index: 999;
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
