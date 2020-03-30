import React, { useEffect, useState, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'
import { useDropzone } from 'react-dropzone'
import {
  StyledUpload,
  PreviewFilesWrapper,
  FilePreview,
  UploadButton,
  SinglePreview,
  Remove,
  RelativeWrap,
  Error,
  Wrapper
} from './FileUploadStyle'
import { FaTrashAlt } from 'react-icons/fa'
import theme from '../theme'

interface FileWithPreview extends File {
  preview: string
}

interface UploadProps {
  label?: string
  dragInstructions?: string
  onFileDrop?: (newFiles: File[]) => void
  acceptedFilePattern?: Array<string>
  uploadButtonText?: string
  onFileRemove?: (file: File) => void
  /** Allows multiple files in the input at once when true */
  multiple?: boolean
  /** Adds files to already uploaded file when true; otherwise, replaces files on drop */
  additive?: boolean
  maxSizeBytes?: number
  maxFiles?: number
  error?: string | boolean
  color?: string
}

const FileUpload = ({
  label,
  dragInstructions,
  onFileDrop,
  acceptedFilePattern,
  uploadButtonText,
  onFileRemove,
  multiple,
  additive,
  error,
  color
}: UploadProps) => {
  const [files, setFiles] = useState([])

  useEffect(() => {
    files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file: File) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )

      typeof onFileDrop !== 'undefined' && onFileDrop(newFiles)
      if (additive) {
        // reduce to remove duplicates
        setFiles(
          [...files, ...newFiles].reduce((unique: File[], file: File) => {
            if (!unique.some(obj => obj.name === file.name)) {
              unique.push(file)
            }
            return unique
          }, [])
        )
      } else {
        setFiles(newFiles)
      }
    },
    [files]
  )

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: acceptedFilePattern || ['image/*'],
    onDrop,
    noClick: true,
    multiple
  })

  const removeFileClick = (file: FileWithPreview) => {
    setFiles(files.filter(f => f.preview !== file.preview))
    typeof onFileRemove !== 'undefined' && onFileRemove(file)
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <StyledUpload {...getRootProps()} error={error}>
          <input {...getInputProps()} />
          <PreviewFilesWrapper>
            {files.map(file => (
              <SinglePreview key={file.name}>
                <RelativeWrap>
                  <FilePreview src={file.preview} />
                  <Remove onClick={() => removeFileClick(file)}>
                    <FaTrashAlt size={15} />
                  </Remove>
                </RelativeWrap>
              </SinglePreview>
            ))}
          </PreviewFilesWrapper>
          {isDragActive ? (
            <p>{dragInstructions || 'Drop the files here ...'} </p>
          ) : (
            <p>{label || "Drag 'n' drop some files here, or "}</p>
          )}
          <UploadButton
            type="button"
            onClick={open}
            color={color || theme.colors.primary}
          >
            {uploadButtonText || 'Select files from computer'}
          </UploadButton>
        </StyledUpload>
        {typeof error === 'string' && <Error>{error}</Error>}
      </Wrapper>
    </ThemeProvider>
  )
}

FileUpload.defaultProps = {
  multiple: true,
  additive: false
}

export default FileUpload
