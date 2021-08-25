import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import styled from 'styled-components'

import { FileWithPreview } from '../index'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface FilePreviewProps {
	file: FileWithPreview
}

const StyledFilePreview = styled.div`
	position: absolute;
	top: 8px;
	left: 8px;
	overflow: hidden;
	width: calc(100% - 16px);
	height: calc(100% - 16px);
	object-fit: contain;
	border-radius: ${({ theme }): string => theme.$pc.borderRadius.small};
	.react-pdf__Page__canvas {
		margin: auto;
	}
`

const FilePreview: React.FC<FilePreviewProps> = ({ file }) => {
	return file.name.endsWith('.pdf') ? (
		<StyledFilePreview>
			<Document file={file}>
				<Page pageNumber={1} scale={0.175} />
			</Document>
		</StyledFilePreview>
	) : (
		<StyledFilePreview src={file.preview} as="img" />
	)
}

export default FilePreview
