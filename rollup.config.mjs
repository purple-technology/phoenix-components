import styles from '@ironkinoko/rollup-plugin-styles'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const dist = 'dist'

const outputsCommon = {
	sourcemap: true,
	interop: 'compat'
}

const outputs = [
	{
		dir: `${dist}`,
		format: 'es',
		...outputsCommon
	}
]

const common = {
	input: 'src/index.tsx',
	external: [
		'@react-hook/previous',
		'@tippyjs/react',
		'@tippyjs/react/headless',
		'countries-and-timezones',
		'lodash/intersection',
		'lodash/pick',
		'lodash/isEqual',
		'nanoid',
		'nouislider',
		'is-mobile',
		'react',
		'react-day-picker',
		'react-dropzone',
		'react-inlinesvg',
		'react-pdf',
		'react-select',
		'react-tabs',
		'prop-types',
		'styled-components',
		'styled-system',
		'formik',
		'zxcvbn'
	],
	plugins: [
		json(),
		peerDepsExternal(),
		typescript({
			tsconfig: './tsconfig.json'
		}),
		svgr({
			memo: true,
			icon: true
		}),
		url(),
		styles(),
		nodeResolve({
			extensions: ['.css']
		}),
		terser()
	]
}

export default outputs
	.map((output) => ({
		...common,
		output
	}))
	.concat({
		input: `${dist}/types/index.d.ts`,
		output: [{ file: `${dist}/index.d.ts`, format: 'es' }],
		plugins: [dts()],
		external: [
			'nouislider/dist/nouislider.css',
			'tippy.js/dist/tippy.css',
			'react-day-picker/dist/style.css'
		]
	})
