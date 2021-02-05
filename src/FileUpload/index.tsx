import React, { useEffect, useState, useCallback } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useDropzone } from 'react-dropzone'

import Alert from '../Alert'
import Button from '../Button'
import {
  StyledUpload,
  PreviewFilesWrapper,
  SinglePreview,
  Remove,
  RelativeWrap,
  Wrapper
} from './FileUploadStyle'
import FilePreview from './components/FilePreview'

export interface FileWithPreview extends File {
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
  /** Adds files to already uploaded files when true; otherwise, replaces files on drop */
  additive?: boolean
  maxSizeBytes?: number
  maxFiles?: number
  error?: string | boolean
  color?: string
  className?: string
  pushUpFiles?: (files: File[]) => void
  fileValidation?: (file: File) => Promise<string | null>
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
  color,
  className,
  pushUpFiles,
  fileValidation
}: UploadProps) => {
  const [files, _setFiles] = useState([])
  const [internalErrors, setInternalErrors] = useState([])

  const setFiles = async (files: FileWithPreview[]) => {
    const correctFiles = fileValidation ? [] : files
    if (fileValidation) {
      const validationErrors: string[] = []
      await Promise.all(
        files.map(async file => {
          const validationError = await fileValidation(file)
          if (validationError) {
            validationErrors.push(`${file.name}: ${validationError}`)
          } else {
            correctFiles.push(file)
          }
        })
      )
      setInternalErrors(validationErrors)
    }
    // Call before updating internal state so that preview urls aren't revoked
    typeof pushUpFiles !== 'undefined' && pushUpFiles(correctFiles)
    _setFiles(correctFiles)
  }

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
    accept: acceptedFilePattern || ['image/*', 'application/pdf'],
    onDrop,
    noClick: true,
    multiple
  })

  const removeFileClick = (file: FileWithPreview) => {
    setFiles(files.filter(f => f.preview !== file.preview))
    typeof onFileRemove !== 'undefined' && onFileRemove(file)
  }

  return (
    <Wrapper className={className}>
      <StyledUpload
        {...getRootProps()}
        error={error || internalErrors.length > 0}
      >
        <input {...getInputProps()} />
        <PreviewFilesWrapper>
          {files.map(file => (
            <SinglePreview key={file.name}>
              <RelativeWrap>
                <FilePreview file={file} />
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
        <Button
          name="uploadButton"
          type="button"
          onClick={open}
          background={color}
          size="small"
        >
          {uploadButtonText || 'Select files from computer'}
        </Button>
      </StyledUpload>
      {typeof error === 'string' && error && (
        <Alert type="danger">{error}</Alert>
      )}
      {internalErrors.length > 0 &&
        internalErrors.map(internalError => (
          <Alert type="danger">{internalError}</Alert>
        ))}
    </Wrapper>
  )
}

FileUpload.defaultProps = {
  multiple: true,
  additive: false
}

export default FileUpload
