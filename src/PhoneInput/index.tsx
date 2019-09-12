import * as React from 'react';
import styled from 'styled-components'
// @ts-ignore
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css'

const StyledReactPhoneInput = styled.div`
  .react-tel-input .flag-dropdown {
    background-color: transparent;
    border-right: none;
  }

  .react-tel-input input[type='text'],
  .react-tel-input input[type='tel'] {
    height: 45px;
  }
`

const PhoneInput = () => (
  <StyledReactPhoneInput>
    <ReactPhoneInput onChange={() => console.log('kek')} />
  </StyledReactPhoneInput>
)

export default PhoneInput
