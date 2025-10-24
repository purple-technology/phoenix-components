import type { StoryFn } from '@storybook/react'
import { useState } from 'react'

import { FileUpload as FileUploadComponent } from './FileUpload'
import type { FileUploadProps } from './FileUpload.types'

export default {
	component: FileUploadComponent,
	argTypes: {
		// Prop error was by default JSON but we need text.
		error: {
			control: {
				type: 'text'
			}
		}
	},
	args: {
		multiple: true,
		additive: false
	}
}

export const FileUpload: StoryFn<FileUploadProps> = (args) => {
	const [files, setFiles] = useState(args.files ?? [])

	return <FileUploadComponent {...args} files={files} setFiles={setFiles} />
}
