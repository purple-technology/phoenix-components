import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const dist = 'dist'
const bundle = 'bundle'

const outputs = [
  {
    file: `${dist}/${bundle}.cjs.js`,
    format: 'cjs'
  },
  {
    file: `${dist}/${bundle}.esm.js`,
    format: 'esm'
  },
  {
    name: 'PurpleComponents',
    file: `${dist}/${bundle}.umd.js`,
    globals: {
      react: 'React',
      'styled-components': 'styled',
      'floating-label-react': 'FloatingLabel',
      'react-select': 'Select',
      'react-dropzone': 'reactDropzone',
      'react-icons/fa': 'fa',
      'react-icons/io': 'io',
      'react-pdf': 'reactPdf',
      'react-window': 'reactWindow'
    },
    format: 'umd'
  }
]

const common = {
  input: 'src/index.tsx',
  external: [
    'floating-label-react',
    'react',
    'react-dropzone',
    'react-icons/fa',
    'react-icons/io',
    'react-pdf',
    'react-select',
    'react-window',
    'styled-components'
  ],
  plugins: [
    peerDepsExternal(),
    typescript({
      typescript: require('typescript')
    })
  ]
}

export default outputs.map(output => ({
  ...common,
  output
}))
