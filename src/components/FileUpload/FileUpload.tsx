import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import uploadIcon from '../../images/file-upload.svg'
import { Button } from '../Button'
import FormControlWarningError from '../common/FormControlWarningError'
import { Icon } from '../Icon'
import FilePreview, { FileWithPreview } from './components/FilePreview'
import PasswordModal from './components/PasswordModal'
import {
	Label,
	LabelDesktop,
	LabelTouchDevice,
	PreviewFilesWrapper,
	RelativeWrap,
	Remove,
	StyledUpload,
	UploadIcon,
	Wrapper
} from './FileUpload.styles'
import { FileUploadProps } from './FileUpload.types'
import { usePasswordQueue } from './usePasswordQueue'

export const FileUpload: React.FC<FileUploadProps> = ({
	multiple = true,
	additive = false,
	testId = 'FileUpload',
	files,
	setFiles: _setFiles,
	label,
	labelTouchDevice,
	dragInstructions,
	onFileDrop,
	acceptedFilePattern,
	uploadButtonText,
	uploadButtonTextTouchDevice,
	onFileRemove,
	error,
	className,
	fileValidation,
	withIcon,
	onPassword,
	passwordPromptText = 'Enter the password to open this PDF file.',
	passwordIncorrectText = 'Invalid password. Please try again.',
	passwordConfirmButtonText = 'Confirm',
	passwordCancelButtonText = 'Cancel',
	passwordPlaceholderText = 'Password'
}) => {
	const [internalErrors, setInternalErrors] = useState<string[]>([])
	const passwordQueue = usePasswordQueue()

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
		accept: acceptedFilePattern ?? {
			'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
			'application/pdf': ['.pdf']
		},
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
		<Wrapper className={className} data-testid={testId}>
			<PasswordModal
				open={!!passwordQueue.currentItem}
				onClose={(): void => {
					setFiles([])
					passwordQueue.removeAll()
				}}
				passwordPromptText={passwordPromptText}
				passwordIncorrectText={passwordIncorrectText}
				passwordConfirmButtonText={passwordConfirmButtonText}
				passwordCancelButtonText={passwordCancelButtonText}
				passwordPlaceholderText={passwordPlaceholderText}
				passwordQueue={passwordQueue}
			/>
			<StyledUpload
				{...getRootProps()}
				isDragActive={isDragActive}
				error={error || internalErrors.length > 0}
			>
				<input {...getInputProps()} />
				<PreviewFilesWrapper>
					{files.map((file) => (
						<RelativeWrap key={file.name}>
							<FilePreview
								file={file}
								setFiles={setFiles}
								onPassword={onPassword}
								passwordQueue={passwordQueue}
							/>
							<Remove onClick={(): void => removeFileClick(file)}>
								<Icon icon="trash-error" size="s" />
							</Remove>
						</RelativeWrap>
					))}
				</PreviewFilesWrapper>
				{withIcon && <UploadIcon src={uploadIcon} />}
				{isDragActive ? (
					<Label>{dragInstructions ?? 'Drop the files here ...'}</Label>
				) : (
					<>
						<LabelDesktop>
							<Label>{label ?? "Drag 'n' drop some files here, or "}</Label>
						</LabelDesktop>
						{labelTouchDevice && (
							<Label>
								<LabelTouchDevice>{labelTouchDevice}</LabelTouchDevice>
							</Label>
						)}
					</>
				)}
				<Button
					name="uploadButton"
					type="button"
					onClick={open}
					size="sm"
					icon="paper"
					colorTheme="brand"
					secondary
				>
					<LabelDesktop>{uploadButtonText ?? 'Select files'}</LabelDesktop>
					<LabelTouchDevice>
						{uploadButtonTextTouchDevice ?? 'Select files'}
					</LabelTouchDevice>
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
