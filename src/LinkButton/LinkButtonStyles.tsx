import styled from 'styled-components'

import { ButtonWrapper } from '../Button/ButtonStyles'

export const ButtonLinkWrapper = styled(ButtonWrapper).attrs({
  as: 'a'
})`
  display: inline-flex;
  text-decoration: none;
`
