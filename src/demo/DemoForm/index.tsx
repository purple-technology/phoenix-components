import React, { useState } from 'react'
import { Formik } from 'formik'

import Input from '../../components/TextInput'
import Select from '../../components/Select'
import SelectPicker from '../../components/SelectPicker'
import Checkbox from '../../components/Checkbox'
import FileUpload from '../../components/FileUpload'
import DateInput from '../../components/DateInput'
import Button from '../../components/Button'
import Notice from '../../components/Notice'
import { CenterWrapper, FormStyled } from './DemoFormStyle'
import { ColorTheme } from '../../theme/ColorTheme'
import TextArea from '../../components/TextArea'
import Label from '../../components/Label'

const SELECT_OPTIONS = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' }
]

const ERROR_MESSAGE = 'This is an error message'
const LONG_DESCRIPTION =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum pulvinar posuere. Morbi pulvinar molestie orci non blandit. Proin faucibus ut velit id egestas. Donec pulvinar feugiat dapibus.'

const DemoForm = () => {
	const [files, setFiles] = useState([])
	return (
		<Formik
			initialValues={{
				input: '',
				inputSuccess: '',
				inputFailure: '',
				inputWithDescription: '',
				inputWithDescriptionSuccess: '',
				inputWithDescriptionFailure: '',
				selectBox: '',
				selectBoxSuccess: '',
				selectBoxFailure: '',
				selectPicker: '',
				dateInput: '',
				checkBox: false,
				textArea: ''
			}}
			onSubmit={(values: any) => {
				console.log(values)
			}}
		>
			{(props: any) => {
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
							error={ERROR_MESSAGE}
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
							description={LONG_DESCRIPTION}
							error={ERROR_MESSAGE}
						/>
						<Select
							label="SelectBox"
							name="selectBox"
							value={values.selectBox}
							onChange={(selectedValue: any) => {
								setFieldValue('selectBox', selectedValue)
							}}
							options={SELECT_OPTIONS}
						/>
						<Select
							label="SelectBox w/ success"
							name="selectBoxSuccess"
							value={values.selectBoxSuccess}
							onChange={(selectedValue: any) => {
								setFieldValue('selectBoxSuccess', selectedValue)
							}}
							options={SELECT_OPTIONS}
							success={true}
						/>
						<Select
							label="SelectBox w/ error"
							name="selectBoxFailure"
							value={values.selectBoxFailure}
							onChange={(selectedValue: any) => {
								setFieldValue('selectBoxFailure', selectedValue)
							}}
							options={SELECT_OPTIONS}
							error={ERROR_MESSAGE}
						/>
						<SelectPicker
							name="selectPicker"
							value={values.selectPicker}
							onChange={(selectedValue: any) => {
								setFieldValue('selectPicker', selectedValue)
							}}
							options={SELECT_OPTIONS}
							label="SelectPicker"
						/>
						<Label>DateInput</Label>
						<DateInput onChange={() => {}} value={values.dateInput} />
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
							value={values.textArea}
							onChange={handleChange}
							rows={2}
						/>
						<Notice>Some example text</Notice>
						<Notice colorTheme={ColorTheme.INFO}>Some example text</Notice>
						<Notice colorTheme={ColorTheme.SUCCESS}>Some example text</Notice>
						<Notice colorTheme={ColorTheme.WARNING}>Some example text</Notice>
						<Notice colorTheme={ColorTheme.ERROR}>Some example text</Notice>
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
