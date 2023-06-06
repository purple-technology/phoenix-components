import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import styles from 'rollup-plugin-styles'

const dist = 'dist'
const bundle = 'bundle'

const outputsCommon = {
	sourcemap: true
}

const outputs = [
	{
		file: `${dist}/${bundle}.cjs.js`,
		format: 'cjs',
		//https://rollupjs.org/guide/en/#outputexports
		exports: 'named',
		...outputsCommon
	},
	{
		file: `${dist}/${bundle}.esm.js`,
		format: 'esm',
		...outputsCommon
	},
	{
		name: 'PurpleComponents',
		file: `${dist}/${bundle}.umd.js`,
		globals: {
			react: 'React',
			'styled-components': 'styled',
			'react-select': 'Select',
			'react-dropzone': 'reactDropzone',
			'react-pdf': 'reactPdf'
			// Must not be here, otherwise the library is not correctly loaded
			// nanoid: 'nanoid'
		},
		format: 'umd',
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
		'formik'
	],
	plugins: [
		json(),
		peerDepsExternal(),
		typescript({
			tsconfig: './tsconfig.json'
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
			// 'react-day-picker/dist/style.css',
			'tippy.js/dist/tippy.css'
		]
	})
