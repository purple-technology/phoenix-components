import React from 'react'

interface YearMonthFormProps {
	date: Date
	months: string[]
	onChange: React.Dispatch<React.SetStateAction<Date>>
}

const YearMonthForm: React.FC<YearMonthFormProps> = ({
	date,
	months,
	onChange
}) => {
	const currentYear = new Date().getFullYear()
	const fromMonth = new Date(currentYear - 10, 0)
	const toMonth = new Date(currentYear + 10, 11)

	const years = []
	for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
		years.push(i)
	}

	return (
		<form className="DayPicker-Caption">
			<select
				name="month"
				onChange={(e): void => {
					onChange(
						new Date(date.getFullYear(), parseInt(e.currentTarget.value, 10))
					)
				}}
				value={date.getMonth()}
			>
				{months.map((month, i) => (
					<option key={month} value={i}>
						{month}
					</option>
				))}
			</select>
			<select
				name="year"
				onChange={(e): void => {
					onChange(
						new Date(parseInt(e.currentTarget.value, 10), date.getMonth())
					)
				}}
				value={date.getFullYear()}
			>
				{years.map((year) => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>
		</form>
	)
}

export default YearMonthForm
