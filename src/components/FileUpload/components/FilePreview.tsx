import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import { PasswordModalQueueProps } from '../FileUpload.types'
import { StyledFilePreview } from './FilePreview.styles'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export interface FileWithPreview extends File {
	preview: string
}

export interface FilePreviewCommonProps {
	setFiles: (files: FileWithPreview[]) => void
	/** Callback called when a correct password is entered for a password protected PDF document */
	onPassword?(filename: string, password: string): void
}

interface FilePreviewProps
	extends FilePreviewCommonProps,
		PasswordModalQueueProps {
	file: FileWithPreview
}

const FilePreview: React.FC<FilePreviewProps> = ({
	file,
	onPassword,
	passwordQueue
}) => {
	const onPasswordCallback = (
		callback: (password: string) => void,
		reason: string
	): void => {
		if (parseInt(reason, 10) === pdfjs.PasswordResponses.NEED_PASSWORD) {
			passwordQueue.add({
				callback,
				incorrect: false,
				filename: file.name
			})
		} else if (
			parseInt(reason, 10) === pdfjs.PasswordResponses.INCORRECT_PASSWORD
		) {
			passwordQueue.editCurrentItem({
				callback,
				incorrect: true
			})
		}
	}

	return file.name.endsWith('.pdf') ? (
		<StyledFilePreview>
			<Document
				file={file}
				onPassword={onPasswordCallback}
				onLoadSuccess={(): void => {
					if (passwordQueue.currentItem?.password) {
						onPassword?.(file.name, passwordQueue.currentItem.password)
						passwordQueue.remove()
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
