import React, { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone'
import { StyledUpload, PreviewFilesWrapper, FilePreview, UploadButton, SinglePreview, Remove, RelativeWrap } from './FileUploadStyle';
import { FaTrashAlt } from 'react-icons/fa';

interface FileUploadProps {
	label?: string
	dragInstructions?: string
	onFileDrop?: any
	acceptedFilePattern?: string
	uploadButtonText?: string
}

const Upload = ({ label, dragInstructions, onFileDrop, acceptedFilePattern, uploadButtonText }: FileUploadProps) => {
	const [files, setFiles] = useState([]);

	useEffect(() => () => {
		files.forEach(file => URL.revokeObjectURL(file.preview));
	}, [files]);

	const onDrop = useCallback(acceptedFiles => {

		const newFiles = acceptedFiles.map((file: any) => Object.assign(file, {
			preview: URL.createObjectURL(file)
		}))

		onFileDrop && onFileDrop(newFiles)
		setFiles(newFiles);
	}, [])

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
		accept: acceptedFilePattern || 'image/*',
		onDrop,
		noClick: true,
	});

	const removeFileClick = (file: any) => {
		setFiles(files.filter(f => f.preview !== file.preview))
	}

	return (
		<StyledUpload {...getRootProps()}>
			<input {...getInputProps()} />
			<PreviewFilesWrapper>
				{files.map(file => (
					<SinglePreview key={file.name}>
						<RelativeWrap>
							<FilePreview
								src={file.preview}
							/>
							<Remove onClick={() => removeFileClick(file)}>
								<FaTrashAlt size={15} />
							</Remove>
						</RelativeWrap>
					</SinglePreview>
				))}
			</PreviewFilesWrapper>
			{
				isDragActive ?
					<p>{dragInstructions || "Drop the files here ..."} </p> :
					<p>{label || "Drag 'n' drop some files here, or "}</p>
			}
			<UploadButton type="button" onClick={open}>
				{uploadButtonText || "Select files from computer"}
			</UploadButton>
		</StyledUpload>
	)
}

export default Upload
