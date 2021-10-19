import React from 'react'

import { Box, BoxProps } from '../Box'

export const Grid: React.FC<BoxProps> = (props) => (
	<Box display="grid" {...props} />
)
