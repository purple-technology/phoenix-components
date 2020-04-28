import styled from 'styled-components'

export const Remove = styled.div`
  position: absolute;
  top: 1px;
  right: 8px;
  width: 20px;
  height: 20px;
  z-index: 9;
  color: red;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #bd0507;
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
      ${({ error }) => (error ? 'red' : '#dedede')} 0%,
      ${({ error }) => (error ? 'red' : '#dedede')} 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to right,
      ${({ error }) => (error ? 'red' : '#dedede')} 0%,
      ${({ error }) => (error ? 'red' : '#dedede')} 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      ${({ error }) => (error ? 'red' : '#dedede')} 0%,
      ${({ error }) => (error ? 'red' : '#dedede')} 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      ${({ error }) => (error ? 'red' : '#dedede')} 0%,
      ${({ error }) => (error ? 'red' : '#dedede')} 50%,
      transparent 50%,
      transparent 100%
    );

  background-position: left top, left bottom, left top, right top;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 20px 2px, 20px 2px, 2px 20px, 2px 20px;
`

export const UploadButton = styled.button<any>`
  outline: none;
  cursor: pointer;
  background: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  border-radius: 3px;
  box-shadow: 0 0 14px 1px rgba(0, 0, 0, 0.16);
  border: 0;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  margin: 0 auto;

  &:hover {
    background: #44215f;
  }
`

export const Error = styled.div`
  color: rgba(204, 0, 0, 0.82);
  padding: 5px 0;
  font-size: 13px;
  margin-top: 2px;
  text-align: center;
`
