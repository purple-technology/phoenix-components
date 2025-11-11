import type React from 'react'

import { Box, type BoxProps } from '../Box'

export const Flex: React.FC<BoxProps> = (props) => (
	<Box display="flex" {...props} />
)
