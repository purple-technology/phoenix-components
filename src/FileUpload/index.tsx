import React, { useEffect, useState, useCallback } from 'react'
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
  multiple?: boolean
  maxSizeBytes?: number
  maxFiles?: number
  error?: string | boolean
}

const Upload = ({
  label,
  dragInstructions,
  onFileDrop,
  acceptedFilePattern,
  uploadButtonText,
  onFileRemove,
  multiple,
  error
}: UploadProps) => {
  const [files, setFiles] = useState([])

  useEffect(() => {
    files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file: File) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    )

    typeof onFileDrop !== 'undefined' && onFileDrop(newFiles)
    setFiles(newFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: acceptedFilePattern || ['image/*'],
    onDrop,
    noClick: true,
    multiple: multiple || true
  })

  const removeFileClick = (file: FileWithPreview) => {
    setFiles(files.filter(f => f.preview !== file.preview))
    typeof onFileRemove !== 'undefined' && onFileRemove(file)
  }

  return (
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
        <UploadButton type="button" onClick={open}>
          {uploadButtonText || 'Select files from computer'}
        </UploadButton>
      </StyledUpload>
      {typeof error === 'string' && <Error>{error}</Error>}
    </Wrapper>
  )
}

export default Upload
