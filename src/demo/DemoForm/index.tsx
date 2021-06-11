import { Formik } from 'formik'
import React, { useState } from 'react'

import Button from '../../components/Button'
import Checkbox from '../../components/Checkbox'
import DateInput, { DateValue } from '../../components/DateInput'
import FileUpload, { FileWithPreview } from '../../components/FileUpload'
import Label from '../../components/Label'
import Notice from '../../components/Notice'
import Select, { Option } from '../../components/Select'
import SelectPicker from '../../components/SelectPicker'
import TextArea from '../../components/TextArea'
import Input from '../../components/TextInput'
import { CenterWrapper, FormStyled } from './DemoFormStyle'

interface DemoFormFormikProps {
	input: string
	inputSuccess: string
	inputFailure: string
	inputWithDescription: string
	inputWithDescriptionSuccess: string
	inputWithDescriptionFailure: string
	selectBox: Option | null
	selectBoxSuccess: Option | null
	selectBoxFailure: Option | null
	selectPicker: string
	dateInput: DateValue | null
	checkBox: boolean
	textArea: string
}

const selectOptions = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' }
]

const errorMessage = 'This is an error message'

const DemoForm: React.FC = () => {
	const [files, setFiles] = useState<FileWithPreview[]>([])
	return (
		<Formik<DemoFormFormikProps>
			initialValues={{
				input: '',
				inputSuccess: '',
				inputFailure: '',
				inputWithDescription: '',
				inputWithDescriptionSuccess: '',
				inputWithDescriptionFailure: '',
				selectBox: null,
				selectBoxSuccess: null,
				selectBoxFailure: null,
				selectPicker: '',
				dateInput: null,
				checkBox: false,
				textArea: ''
			}}
			onSubmit={(): void => {
				console.log('onSubmit')
			}}
		>
			{(props): React.ReactNode => {
				const { values, handleChange, handleSubmit, setFieldValue } = props
				return (
					<FormStyled onSubmit={handleSubmit}>
						<Input
							label="Input"
							name="input"
							value={values.input}
							onChange={handleChange}
						/>
						<Input
							label="Input w/ success"
							name="inputSuccess"
							value={values.inputSuccess}
							onChange={handleChange}
							success={true}
						/>
						<Input
							label="Input w/ error"
							name="inputFailure"
							value={values.inputFailure}
							onChange={handleChange}
							error={errorMessage}
						/>
						<Input
							label="Input w/ Description"
							name="inputWithDescription"
							value={values.inputWithDescription}
							onChange={handleChange}
						/>
						<Input
							label="Input w/ description and success"
							name="inputWithDescriptionSuccess"
							value={values.inputWithDescriptionSuccess}
							onChange={handleChange}
							success={true}
						/>
						<Input
							label="Input w/ description and failure"
							name="inputWithDescriptionFailure"
							value={values.inputWithDescriptionFailure}
							onChange={handleChange}
							error={errorMessage}
						/>
						<Select
							label="SelectBox"
							name="selectBox"
							value={values.selectBox}
							onChange={(selectedValue): void => {
								setFieldValue('selectBox', selectedValue)
							}}
							options={selectOptions}
						/>
						<Select
							label="SelectBox w/ success"
							name="selectBoxSuccess"
							value={values.selectBoxSuccess}
							onChange={(selectedValue): void => {
								setFieldValue('selectBoxSuccess', selectedValue)
							}}
							options={selectOptions}
							success={true}
						/>
						<Select
							label="SelectBox w/ error"
							name="selectBoxFailure"
							value={values.selectBoxFailure}
							onChange={(selectedValue): void => {
								setFieldValue('selectBoxFailure', selectedValue)
							}}
							options={selectOptions}
							error={errorMessage}
						/>
						<SelectPicker
							name="selectPicker"
							value={values.selectPicker}
							onChange={(selectedValue): void => {
								setFieldValue('selectPicker', selectedValue)
							}}
							options={selectOptions}
						/>
						<Label>DateInput</Label>
						<DateInput
							onChange={(selectedDate): void => {
								console.log(selectedDate)
								setFieldValue('dateInput', selectedDate)
							}}
							value={values.dateInput}
						/>
						<Checkbox
							checked={values.checkBox}
							name="checkBox"
							id="checkBox"
							onChange={handleChange}
						>
							Checkbox
						</Checkbox>
						<TextArea
							label="TextArea"
							name="textArea"
							value={values.text.darkArea}
							onChange={handleChange}
							rows={2}
						/>
						<Notice>Some example text</Notice>
						<Notice colorTheme={'info'}>Some example text</Notice>
						<Notice colorTheme={'success'}>Some example text</Notice>
						<Notice colorTheme={'warning'}>Some example text</Notice>
						<Notice colorTheme={'error'}>Some example text</Notice>
						<CenterWrapper>
							<FileUpload
								label="FileUpload"
								files={files}
								setFiles={setFiles}
							/>
							<Button name="button" type="submit">
								Submit
							</Button>
						</CenterWrapper>
					</FormStyled>
				)
			}}
		</Formik>
	)
}

export default DemoForm
