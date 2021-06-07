import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FaTrashAlt } from 'react-icons/fa'

import { ComponentSize } from '../../enum/ComponentSize'
import uploadIcon from '../../icons/file-upload.svg'
import buttonIcon from '../../icons/file-upload-button.svg'
import { ColorTheme } from '../../theme/ColorTheme'
import Button from '../Button'
import FormControlWarningError from '../common/FormControlWarningError'
import FilePreview from './components/FilePreview'
import {
	DragText,
	Icon,
	PreviewFilesWrapper,
	RelativeWrap,
	Remove,
	SinglePreview,
	StyledUpload,
	Wrapper
} from './FileUploadStyle'

export interface FileWithPreview extends File {
	preview: string
}

export interface UploadProps {
	files: FileWithPreview[]
	setFiles: (files: FileWithPreview[]) => void
	label?: string
	dragInstructions?: string
	onFileDrop?: (newFiles: File[]) => void
	acceptedFilePattern?: Array<string>
	uploadButtonText?: string
	onFileRemove?: (file: File) => void
	/** Allows multiple files in the input at once when true */
	multiple?: boolean
	/** Adds files to already uploaded files when true; otherwise, replaces files on drop */
	additive?: boolean
	maxSizeBytes?: number
	maxFiles?: number
	error?: string | boolean
	className?: string
	fileValidation?: (file: File) => Promise<string | null>
	withIcon?: boolean
	colorTheme?: ColorTheme
}

const FileUpload: React.FC<UploadProps> = ({
	files,
	setFiles: _setFiles,
	label,
	dragInstructions,
	onFileDrop,
	acceptedFilePattern,
	uploadButtonText,
	onFileRemove,
	multiple,
	additive,
	error,
	className,
	fileValidation,
	withIcon,
	colorTheme
}) => {
	const [internalErrors, setInternalErrors] = useState<string[]>([])

	const setFiles = useCallback(
		async (files: FileWithPreview[]) => {
			const correctFiles = fileValidation ? [] : files
			if (fileValidation) {
				const validationErrors: string[] = []
				await Promise.all(
					files.map(async (file) => {
						const validationError = await fileValidation(file)
						if (validationError) {
							validationErrors.push(`${file.name}: ${validationError}`)
						} else {
							correctFiles.push(file)
						}
					})
				)
				setInternalErrors(validationErrors)
			}

			_setFiles(correctFiles)
		},
		[_setFiles, fileValidation]
	)

	useEffect(() => {
		return (): void => {
			files.forEach((file) => URL.revokeObjectURL(file.preview))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			const newFiles = acceptedFiles.map((file: File) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file)
				})
			)

			typeof onFileDrop !== 'undefined' && onFileDrop(newFiles)
			if (additive) {
				// reduce to remove duplicates
				setFiles(
					[...files, ...newFiles].reduce(
						(unique: FileWithPreview[], file: FileWithPreview) => {
							if (!unique.some((obj) => obj.name === file.name)) {
								unique.push(file)
							}
							return unique
						},
						[]
					)
				)
			} else {
				setFiles(newFiles)
			}
		},
		[files, additive, onFileDrop, setFiles]
	)

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
		accept: acceptedFilePattern || ['image/*', 'application/pdf'],
		onDrop,
		noClick: true,
		multiple
	})

	const removeFileClick = (file: FileWithPreview): void => {
		URL.revokeObjectURL(file.preview)
		setFiles(files.filter((f) => f.preview !== file.preview))
		typeof onFileRemove !== 'undefined' && onFileRemove(file)
	}

	return (
		<Wrapper className={className}>
			<StyledUpload
				{...getRootProps()}
				isDragActive={isDragActive}
				error={error || internalErrors.length > 0}
			>
				<input {...getInputProps()} />
				<PreviewFilesWrapper>
					{files.map((file) => (
						<SinglePreview key={file.name}>
							<RelativeWrap>
								<FilePreview file={file} />
								<Remove onClick={(): void => removeFileClick(file)}>
									<FaTrashAlt size={15} />
								</Remove>
							</RelativeWrap>
						</SinglePreview>
					))}
				</PreviewFilesWrapper>
				{withIcon && <Icon src={uploadIcon} alt="" />}
				{isDragActive ? (
					<DragText>{dragInstructions || 'Drop the files here ...'} </DragText>
				) : (
					<DragText>{label || "Drag 'n' drop some files here, or "}</DragText>
				)}
				<Button
					name="uploadButton"
					type="button"
					onClick={open}
					size={ComponentSize.SMALL}
					icon={buttonIcon}
					colorTheme={colorTheme}
					light
				>
					{uploadButtonText || 'Select files from computer'}
				</Button>
			</StyledUpload>
			{typeof error === 'string' && error && (
				<FormControlWarningError error={error} />
			)}
			{internalErrors.length > 0 &&
				internalErrors.map((internalError, index) => (
					<FormControlWarningError error={internalError} key={index} />
				))}
		</Wrapper>
	)
}

FileUpload.defaultProps = {
	multiple: true,
	additive: false
}

export default FileUpload
