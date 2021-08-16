import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import styled from 'styled-components'

import { FileWithPreview } from '../index'

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
