import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import svg from 'rollup-plugin-svg-import'

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
			'react-pdf': 'reactPdf',
			nanoid: 'nanoid'
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
		'styled-components'
	],
	plugins: [
		peerDepsExternal(),
		typescript(),
		svg({
			// process SVG to string to support SSR
			stringify: true
		})
	]
}

export default outputs.map((output) => ({
	...common,
	output
}))
