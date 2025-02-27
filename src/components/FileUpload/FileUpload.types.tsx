import { Accept } from 'react-dropzone'

import { GenericComponentProps } from '../../interfaces/GenericComponentProps'
import {
	FilePreviewCommonProps,
	FileWithPreview
} from './components/FilePreview'
import { PasswordModalCommonProps } from './components/PasswordModal'
import { PasswordQueue } from './usePasswordQueue'

export interface PasswordModalQueueProps {
	passwordQueue: PasswordQueue
}

export interface FileUploadProps
	extends GenericComponentProps,
		FilePreviewCommonProps,
		PasswordModalCommonProps {
	files: FileWithPreview[]
	label?: string
	labelTouchDevice?: string
	dragInstructions?: string
	onFileDrop?: (newFiles: File[]) => void
	acceptedFilePattern?: Accept
	uploadButtonText?: string
	uploadButtonTextTouchDevice?: string
	onFileRemove?: (file: File) => void
	/** Allows multiple files in the input at once when true */
	multiple?: boolean
	/** Adds files to already uploaded files when true; otherwise, replaces files on drop */
	additive?: boolean
	maxSizeBytes?: number
	maxFiles?: number
	error?: string | boolean
	fileValidation?: (file: File) => Promise<string | null>
	withIcon?: boolean
	/** Error message displayed when a dropped file is rejected due to its format not matching the acceptedFilePattern. After ':' it automatically appends supported extensions.*/
	unsupportedFileFormatErrorMessage?: string
}
