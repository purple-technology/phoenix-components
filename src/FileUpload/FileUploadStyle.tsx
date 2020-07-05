import styled from 'styled-components'

export const Remove = styled.div`
  position: absolute;
  top: 1px;
  right: 8px;
  width: 20px;
  height: 20px;
  z-index: 9;
  color: ${({ theme }) => theme.colors.error};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(0.9);
  }
`

export const PreviewFilesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
`
export const SinglePreview = styled.div``

export const RelativeWrap = styled.div`
  max-width: 140px;
  position: relative;
`

export const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  font-family: ${({ theme }) => theme.font};
`

export const StyledUpload = styled.div<{ error: string | boolean }>`
  padding: 20px;
  text-align: center;
  width: 100%;
  outline: none;
  box-sizing: border-box;
  transition: background-image 0.3s;

  background-image: repeating-linear-gradient(
      to right,
      ${({ error, theme }) => (error ? theme.colors.error : theme.colors.grey)}
        0%,
      ${({ error, theme }) => (error ? theme.colors.error : theme.colors.grey)}
        50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to right,
      ${({ error, theme }) => (error ? theme.colors.error : theme.colors.grey)}
        0%,
      ${({ error, theme }) => (error ? theme.colors.error : theme.colors.grey)}
        50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      ${({ error, theme }) => (error ? theme.colors.error : theme.colors.grey)}
        0%,
      ${({ error, theme }) => (error ? theme.colors.error : theme.colors.grey)}
        50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      ${({ error, theme }) => (error ? theme.colors.error : theme.colors.grey)}
        0%,
      ${({ error, theme }) => (error ? theme.colors.error : theme.colors.grey)}
        50%,
      transparent 50%,
      transparent 100%
    );

  background-position: left top, left bottom, left top, right top;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 20px 2px, 20px 2px, 2px 20px, 2px 20px;

  button {
    margin: 0 auto;
  }
`
