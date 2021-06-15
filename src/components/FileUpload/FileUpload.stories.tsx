import { Story } from '@storybook/react'
import React, { useState } from 'react'

import { FileUpload as FileUploadComponent, FileUploadProps } from './index'

export default {
	title: 'components / FileUpload',
	component: FileUploadComponent,
	argTypes: {
		// Prop error was by default JSON but we need text.
		error: {
			control: {
				type: 'text'
			}
		},
		multiple: {
			defaultValue: true
		},
		additive: {
			defaultValue: false
		}
	}
}

export const FileUpload: Story<FileUploadProps> = (args) => {
	const [files, setFiles] = useState(args.files ?? [])

	return <FileUploadComponent {...args} files={files} setFiles={setFiles} />
}

FileUpload.storyName = 'FileUpload'
