import type React from 'react'

import { Box, type BoxProps } from '../Box'

export const Grid: React.FC<BoxProps> = (props) => (
	<Box display="grid" {...props} />
)
