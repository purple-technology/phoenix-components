import { Spacing } from '../../../types/Spacing'

export const spacingArgType = {
	control: 'select',
	options: Spacing
}

export const paddingArgTypes = {
	p: {
		...spacingArgType
	},
	px: {
		...spacingArgType
	},
	py: {
		...spacingArgType
	},
	pt: {
		...spacingArgType
	},
	pr: {
		...spacingArgType
	},
	pb: {
		...spacingArgType
	},
	pl: {
		...spacingArgType
	}
}

export const marginArgTypes = {
	m: {
		...spacingArgType
	},
	mx: {
		...spacingArgType
	},
	my: {
		...spacingArgType
	},
	mt: {
		...spacingArgType
	},
	mr: {
		...spacingArgType
	},
	mb: {
		...spacingArgType
	},
	ml: {
		...spacingArgType
	}
}
