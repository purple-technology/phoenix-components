import React from 'react'
import styled from 'styled-components'

const MenuDivider = styled.div`
	width: 100%;
	height: 1px;
	background: ${({ theme }) => theme.colors.borderInput};
`

export default MenuDivider
