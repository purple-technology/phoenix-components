import { Field, Form, Formik, FormikErrors } from 'formik'
import React, { ReactNode, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import { Box } from '../../Box'
import { Button } from '../../Button'
import { Flex } from '../../Flex'
import { Icon } from '../../Icon'
import { Modal } from '../../Modal'
import { Notice } from '../../Notice'
import { Paragraph } from '../../Paragraph'
import { PasswordModalFile, PasswordModalQueueProps } from '../FileUpload.types'
import { FormikTextInput } from './FormikTextInput'

export interface PasswordModalCommonProps {
	/** Prompt text for a password */
	passwordPromptText?: string
	/** Prompt text when an incorrect password is entered */
	passwordIncorrectText?: string
	/** Button text to confirm password */
	passwordConfirmButtonText?: string
	/** Button text to close password modal */
	passwordCancelButtonText?: string
	passwordPlaceholderText?: string
}

interface Props extends PasswordModalCommonProps, PasswordModalQueueProps {
	open: boolean
	onClose: () => void
}

interface FormValues {
	password: string
}

const PasswordModal: React.FC<Props> = ({
	open,
	onClose,
	passwordPromptText,
	passwordIncorrectText,
	passwordConfirmButtonText,
	passwordCancelButtonText,
	passwordPlaceholderText,
	passwordModalQueue,
	setPasswordModalQueue
}) => {
	const currentFile = passwordModalQueue[0]
	const theme = useTheme()

	const setCurrentFileAttr = (fileAttr: PasswordModalFile): void => {
		setPasswordModalQueue(
			passwordModalQueue.map((item) =>
				item.filename === currentFile.filename
					? {
							...item,
							...fileAttr
					  }
					: item
			)
		)
	}

	const [filename, setFilename] = useState(currentFile?.filename)

	useEffect(() => {
		setFilename(currentFile?.filename ?? filename)
	}, [currentFile])

	return (
		<Modal
			open={open}
			onClose={onClose}
			size="xs"
			p="xl"
			showCloseButton={false}
			closeOnOverlayClick={false}
		>
			<Box textAlign="center">
				<Icon icon="lock-brand" mb="xs" size={40} />
				<Paragraph bold size="md" mb="s">
					{passwordPromptText} [{filename}]
				</Paragraph>
			</Box>
			<Formik<FormValues>
				initialValues={{
					password: ''
				}}
				validate={({ password }): void | FormikErrors<FormValues> => {
					if (!password) {
						return {
							password: passwordPromptText
						}
					}
				}}
				onSubmit={({ password }, formikHelpers): void => {
					setCurrentFileAttr({
						password
					})
					currentFile.callback?.(password)
					formikHelpers.resetForm()
				}}
			>
				{(formikProps): ReactNode => (
					<Form
						onSubmit={formikProps.handleSubmit}
						onInput={(): void =>
							setCurrentFileAttr({
								incorrect: false
							})
						}
					>
						<Field
							component={FormikTextInput}
							name="password"
							type="password"
							placeholder={passwordPlaceholderText}
							autoFocus
						/>
						{currentFile?.incorrect && (
							<Notice colorTheme="error" mt="xxs">
								{passwordIncorrectText}
							</Notice>
						)}
						<Flex
							gap={theme.tokens.ref.spacing['2xs']}
							justifyContent="center"
							mt="s"
						>
							<Button type="submit">{passwordConfirmButtonText}</Button>
							<Button onClick={onClose} secondary colorTheme="neutral">
								{passwordCancelButtonText}
							</Button>
						</Flex>
					</Form>
				)}
			</Formik>
		</Modal>
	)
}

export default PasswordModal
