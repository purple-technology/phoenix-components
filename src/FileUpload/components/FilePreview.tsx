import React from 'react'
import { Document, Page } from 'react-pdf'
import styled from 'styled-components'
import { FileWithPreview } from '../index'

interface FilePreviewProps {
  file: FileWithPreview
}

export const StyledFilePreview = styled.img`
  max-width: 90%;
  max-height: 300px;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 auto;
  border: 1px solid #dedede;
  border-radius: 3px;
  z-index: 999;
`

const FilePreview = ({ file }: FilePreviewProps) => {
  return (
    <div>
      {file.name.endsWith('.pdf') ? (
        <Document file={file}>
          <Page pageNumber={1} />
        </Document>
      ) : (
        <StyledFilePreview src={file.preview} />
      )}
    </div>
  )
}

export default FilePreview
