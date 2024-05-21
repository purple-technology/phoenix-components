import { PipsMode, PipsType } from 'nouislider'

import { GenericComponentProps } from '../../../interfaces/GenericComponentProps'
import { CSSValue } from '../../../types/CSSValue'

export interface CommonSliderProps {
	range: {
		min: SubRange
		max: SubRange
		[key: string]: SubRange
	}
	connect?: 'lower' | 'upper' | boolean | boolean[]
	step?: number
	pips?: Pips
	snap?: boolean
}

export interface ComponentSliderProps extends GenericComponentProps {
	px?: CSSValue
	disabled?: boolean
}

export type Pips =
	| PositionsPips
	| ValuesPips
	| CountPips
	| StepsPips
	| RangePips

type SubRange = number | [number] | [number, number]

type PipsFilter = (value: number, type: PipsType) => PipsType

interface PartialFormatter {
	to: (value: number) => string | number
	from?: (value: string) => number | false
}

interface BasePips {
	mode: PipsMode
	density?: number
	filter?: PipsFilter
	format?: PartialFormatter
}
interface PositionsPips extends BasePips {
	mode: PipsMode.Positions
	values: number[]
	stepped?: boolean
}
interface ValuesPips extends BasePips {
	mode: PipsMode.Values
	values: number[]
	stepped?: boolean
}
interface CountPips extends BasePips {
	mode: PipsMode.Count
	values: number
	stepped?: boolean
}
interface StepsPips extends BasePips {
	mode: PipsMode.Steps
}
interface RangePips extends BasePips {
	mode: PipsMode.Range
}
