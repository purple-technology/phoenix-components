import React, { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone'
import { StyledUpload } from './FileUploadStyle';

interface FileUploadProps {
	label?: string
	dragInstructions?: string
	onFileDrop?: any
	acceptedFilePattern?: string
}

const Upload = ({ label, dragInstructions, onFileDrop, acceptedFilePattern }: FileUploadProps) => {
	const [files, setFiles] = useState([]);

	useEffect(() => () => {
		files.forEach(file => URL.revokeObjectURL(file.preview));
	}, [files]);

	const onDrop = useCallback(acceptedFiles => {
		onFileDrop && onFileDrop(acceptedFiles)
		setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
			preview: URL.createObjectURL(file)
		})));
	}, [])

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: acceptedFilePattern || 'image/*',
		onDrop
	});

	return (
		<React.Fragment>
			<StyledUpload {...getRootProps()}>
				<input {...getInputProps()} />
				{
					isDragActive ?
						<p>{dragInstructions || "Drop the files here ..."} </p> :
						<p>{label || "Drag 'n' drop some files here, or click to select files"}</p>
				}
			</StyledUpload>
			<div>
				{files.map(file => (
					<div key={file.name}>
						<div>
							<img
								src={file.preview}
							/>
						</div>
					</div>
				))}
			</div>
		</React.Fragment>
	)
}

export default Upload
