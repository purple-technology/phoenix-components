import * as React from 'react'
// @ts-ignore
import {
  StyledFloatingLabel,
  Error,
  TextAreaWrap,
  ContentRight,
  Wrapper
} from './TextAreaStyles'

interface InputProps {
  onChange: (change: React.ChangeEvent) => void
  onBlur?: any
  value: string | number
  error?: string | boolean
  label: string
  autoComplete?: string
  type?: string
  name?: string
  background?: string
  withBorder?: boolean
  /** Content to display to the far right of the text input */
  contentRight?: any
  disableErrorText?: boolean
  /** The number of rows (lines of input) inside the text area */
  rows?: number
}

const TextArea = ({
  onChange,
  onBlur,
  value,
  error,
  label,
  type,
  name,
  background,
  withBorder,
  contentRight,
  disableErrorText,
  rows
}: InputProps) => (
  <Wrapper>
    <TextAreaWrap background={background} withBorder={withBorder} error={error}>
      <StyledFloatingLabel
        id={name}
        component="textarea"
        rows={rows}
        withBorder={withBorder}
        name={name}
        placeholder={label}
        error={error}
        type={type}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      {contentRight && <ContentRight>{contentRight}</ContentRight>}
    </TextAreaWrap>
    {error && !disableErrorText && <Error>{error}</Error>}
  </Wrapper>
)

TextArea.defaultProps = {
  rows: 3,
  type: 'text'
}

export default TextArea
