import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import styled from 'styled-components'

import { FilePreviewCommonProps, FileWithPreview } from '../index'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface FilePreviewProps extends FilePreviewCommonProps {
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
	border-radius: ${({ theme }): string =>
		theme.tokens.inputButton.borderRadius.xs};
`

const FilePreview: React.FC<FilePreviewProps> = ({
	file,
	setFiles,
	onPassword,
	passwordPromptText,
	passwordIncorrectText
}) => {
	const [password, setPassword] = useState<string>()

	const onPasswordCallback = (
		callback: (password: string) => void,
		reason: string
	): void => {
		const callbackProxy = (password: string | null): void => {
			if (password === null) {
				setPassword(undefined)
				return setFiles([])
			}
			setPassword(password)
			callback(password)
		}
		if (parseInt(reason, 10) === pdfjs.PasswordResponses.NEED_PASSWORD) {
			const password = prompt(`${passwordPromptText} [${file.name}]`)
			callbackProxy(password)
		} else if (
			parseInt(reason, 10) === pdfjs.PasswordResponses.INCORRECT_PASSWORD
		) {
			const password = prompt(`${passwordIncorrectText} [${file.name}]`)
			callbackProxy(password)
		}
	}

	return file.name.endsWith('.pdf') ? (
		<StyledFilePreview>
			<Document
				file={file}
				onPassword={onPasswordCallback}
				onLoadSuccess={(): void => {
					if (password) {
						onPassword?.(file.name, password)
						setPassword(undefined)
					}
				}}
			>
				<Page pageNumber={1} width={142} />
			</Document>
		</StyledFilePreview>
	) : (
		<StyledFilePreview src={file.preview} as="img" />
	)
}

export default FilePreview
