import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  margin: 0 auto 20px;
  line-height: 20px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`

export const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.font};
`

export const GridInput = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr 1fr;
  grid-column-gap: 15px;
`

export const Error = styled.div`
  background: rgba(222, 29, 29, 0.28);
  color: rgba(204, 0, 0, 1);
  margin-top: 10px;
  font-size: 13px;
  padding: 5px;
  border-radius: 3px;
`
