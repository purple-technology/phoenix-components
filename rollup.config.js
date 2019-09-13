import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const dist = "dist"
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
      'react': 'React',
      'floating-label-react': 'FloatingLabel',
      'react-select': 'Select',
      'react-icons/fa': 'fa',
    },
    format: 'umd'
  }
]

const common = {
  input: 'src/index.tsx',
  external: ['react', 'styled-components'],
  plugins: [
    peerDepsExternal(),
    typescript({
      typescript: require("typescript")
    })
  ]
}

export default outputs.map(output => ({
  ...common,
  output
}))
