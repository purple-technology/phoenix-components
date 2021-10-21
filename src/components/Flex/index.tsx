import React from 'react'

import { Box, BoxProps } from '../Box'

export const Flex: React.FC<BoxProps> = (props) => (
	<Box display="flex" {...props} />
)
