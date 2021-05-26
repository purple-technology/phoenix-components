import React, { useState } from 'react'

import FileUploadComponent, { UploadProps } from './index'

export default {
	title: 'components / FileUpload',
	component: FileUploadComponent,
	/** Prop error was by default JSON but we need text. */
	argTypes: {
		error: {
			control: {
				type: 'text'
			}
		}
	}
}

export const FileUpload = (args: UploadProps) => {
	const [files, setFiles] = useState(args.files ?? [])

	return (
		<FileUploadComponent
			{...args}
			files={files}
			setFiles={files => setFiles(files)}
		/>
	)
}
