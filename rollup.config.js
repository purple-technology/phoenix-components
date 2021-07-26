import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

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
		'@tippyjs/react/headless',
		'countries-and-timezones',
		'nanoid',
		'is-mobile',
		'react',
		'react-dropzone',
		'react-inlinesvg',
		'react-pdf',
		'react-select',
		'styled-components',
		'formik'
	],
	plugins: [
		peerDepsExternal(),
		typescript({
			tsconfig: './tsconfig.json'
		}),
		url()
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
		plugins: [dts()]
	})
