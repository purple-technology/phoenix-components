import React from 'react'
import { Formik } from 'formik'

import Input from '../Input'
import SelectBox from '../SelectBox'
import SelectPicker from '../SelectPicker'
import CheckBox from '../CheckBox'
import TextArea from '../TextArea'
import FileUpload from '../FileUpload'
import DateInput from '../DateInput'
import Button from '../Button'
import Alert from '../Alert'
import { FormStyled, ComponentDivider, CenterWrapper } from './DemoFormStyle'

const SELECT_OPTIONS = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]

const ERROR_MESSAGE = 'This is an error message'
const LONG_DESCRIPTION =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum pulvinar posuere. Morbi pulvinar molestie orci non blandit. Proin faucibus ut velit id egestas. Donec pulvinar feugiat dapibus.'

const DemoForm = () => {
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
            <ComponentDivider />
            <Input
              label="Input w/ success"
              name="inputSuccess"
              value={values.inputSuccess}
              onChange={handleChange}
              success={true}
            />
            <ComponentDivider />
            <Input
              label="Input w/ error"
              name="inputFailure"
              value={values.inputFailure}
              onChange={handleChange}
              error={ERROR_MESSAGE}
            />
            <ComponentDivider />
            <Input
              label="Input w/ Description"
              name="inputWithDescription"
              value={values.inputWithDescription}
              onChange={handleChange}
              description={LONG_DESCRIPTION}
            />
            <ComponentDivider />
            <Input
              label="Input w/ description and success"
              name="inputWithDescriptionSuccess"
              value={values.inputWithDescriptionSuccess}
              onChange={handleChange}
              description={LONG_DESCRIPTION}
              success={true}
            />
            <ComponentDivider />
            <Input
              label="Input w/ description and failure"
              name="inputWithDescriptionFailure"
              value={values.inputWithDescriptionFailure}
              onChange={handleChange}
              description={LONG_DESCRIPTION}
              error={ERROR_MESSAGE}
            />
            <ComponentDivider />
            <SelectBox
              label="SelectBox"
              name="selectBox"
              value={values.selectBox}
              onChange={(selectedValue: any) => {
                setFieldValue('selectBox', selectedValue)
              }}
              options={SELECT_OPTIONS}
            />
            <ComponentDivider />
            <SelectBox
              label="SelectBox w/ success"
              name="selectBoxSuccess"
              value={values.selectBoxSuccess}
              onChange={(selectedValue: any) => {
                setFieldValue('selectBoxSuccess', selectedValue)
              }}
              options={SELECT_OPTIONS}
              success={true}
            />
            <ComponentDivider />
            <SelectBox
              label="SelectBox w/ error"
              name="selectBoxFailure"
              value={values.selectBoxFailure}
              onChange={(selectedValue: any) => {
                setFieldValue('selectBoxFailure', selectedValue)
              }}
              options={SELECT_OPTIONS}
              error={ERROR_MESSAGE}
            />
            <ComponentDivider />
            <SelectPicker
              name="selectPicker"
              value={values.selectPicker}
              onChange={(selectedValue: any) => {
                setFieldValue('selectPicker', selectedValue)
              }}
              options={SELECT_OPTIONS}
              label="SelectPicker"
            />
            <ComponentDivider />
            <DateInput
              label="DateInput"
              onChange={() => {}}
              value={values.dateInput}
            />
            <ComponentDivider />
            <CheckBox
              checked={values.checkBox}
              label="CheckBox"
              name="checkBox"
              id="checkBox"
              onChange={handleChange}
            />
            <ComponentDivider />
            <TextArea
              label="TextArea"
              name="textArea"
              value={values.textArea}
              onChange={handleChange}
              rows={2}
            />
            <ComponentDivider />
            <Alert
              type="primary"
              title="Example Title"
              text="Some example text"
            />
            <ComponentDivider />
            <Alert
              type="success"
              title="Example Title"
              text="Some example text"
            />
            <ComponentDivider />
            <Alert
              type="warning"
              title="Example Title"
              text="Some example text"
            />
            <ComponentDivider />
            <Alert
              type="danger"
              title="Example Title"
              text="Some example text"
            />
            <ComponentDivider />
            <CenterWrapper>
              <FileUpload label="FileUpload" />
              <ComponentDivider />
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
