import styled from 'styled-components'

import { determineTheme } from '../helpers'

export const Label = styled.label`
  display: block;
  margin: 0 auto 20px;
  line-height: 20px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`

export const Wrapper = styled.div`
  font-family: ${({ theme }) => determineTheme(theme).font};
`

export const GridInput = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr 1fr;
  grid-column-gap: 15px;
`
