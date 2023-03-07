// https://stackoverflow.com/a/67767306/1008530
// (string & {}) is kind of a hack - so that when we're using it in combination
// with union types, compiler hints these union types, e.g. Sizing | CSSValue
export type CSSValue = (string & {}) | number

export type CSSColor = string & {}
