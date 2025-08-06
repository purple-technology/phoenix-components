// Types are defined already in style-dictionary package, but we need to redeclare them
// here to use them in our code. When importing from style-dictionary package, we get
// error that `moduleResolution` must be set to something other than `node` in tsconfig.json
// and this would case other type problems in the project.

declare module 'style-dictionary' {
	interface DesignToken {
		value?: any
		$value?: any
		type?: string
		$type?: string
		$description?: string
		name?: string
		comment?: string
		themeable?: boolean
		attributes?: Record<string, unknown>
		key?: string
		[key: string]: any
	}

	interface DesignTokens {
		$type?: string
		[key: string]: DesignTokens | DesignToken | string | undefined
	}

	interface TransformedToken extends DesignToken {
		name: string
		path: string[]
		original: DesignToken
		filePath: string
		isSource: boolean
	}

	interface Dictionary {
		tokens: Record<string, TransformedToken | Record<string, TransformedToken>>
		allTokens: TransformedToken[]
		tokenMap: Map<string, TransformedToken>
		unfilteredTokens?: Record<
			string,
			TransformedToken | Record<string, TransformedToken>
		>
		unfilteredAllTokens?: TransformedToken[]
		unfilteredTokenMap?: Map<string, TransformedToken>
	}

	interface LocalOptions {
		showFileHeader?: boolean
		fileHeader?: string | FileHeader
		outputReferences?:
			| boolean
			| ((
					token: TransformedToken,
					options: { dictionary: Dictionary; usesDtcg?: boolean }
			  ) => boolean)
		outputReferenceFallbacks?: boolean
		formatting?: FormattingOverrides
		[key: string]: any
	}

	interface FormattingOverrides {
		commentStyle?: 'short' | 'xml' | 'long'
		commentPosition?: string
		indentation?: string
		header?: string
		footer?: string
		fileHeaderTimestamp?: boolean
	}

	type FileHeader = (
		defaultMessage?: string[],
		options?: Config
	) => Promise<string[]> | string[]

	interface File {
		destination?: string
		format?: string | FormatFn
		filter?: string | Partial<TransformedToken> | Filter['filter']
		options?: LocalOptions
	}

	interface FormatFnArguments {
		dictionary: Dictionary
		file: File
		options: Config & LocalOptions
		platform: PlatformConfig
	}

	type FormatFn = ((args: FormatFnArguments) => unknown | Promise<unknown>) & {
		nested?: boolean
	}

	interface Format {
		name: string
		format: FormatFn
	}

	interface Filter {
		filter: (
			token: TransformedToken,
			options: Config,
			platform?: PlatformConfig
		) => boolean
	}

	interface Transform {
		name: string
		type: 'name' | 'attribute' | 'value'
		filter?: Filter['filter']
		transitive?: boolean
		transform: (
			token: TransformedToken,
			config: PlatformConfig,
			options: Config,
			vol?: Volume
		) => Promise<any> | any
	}

	interface Volume {
		[key: string]: any
	}

	interface LogConfig {
		warnings?: string
		verbosity?: string
		errors?: {
			brokenReferences?: string
		}
	}

	interface PlatformConfig {
		log?: LogConfig
		transformGroup?: string
		transforms?: string[] | Transform[]
		expand?:
			| boolean
			| ((
					token: DesignToken,
					options: Config,
					platform?: PlatformConfig
			  ) => boolean)
		preprocessors?: string[]
		prefix?: string
		buildPath?: string
		files?: File[]
		actions?: string[] | any[]
		options?: LocalOptions
		[key: string]: any
	}

	interface Config {
		log?: LogConfig
		source?: string[]
		include?: string[]
		tokens?: DesignTokens
		hooks?: {
			parsers?: Record<string, any>
			preprocessors?: Record<string, any>
			transformGroups?: Record<string, string[]>
			transforms?: Record<string, any>
			formats?: Record<string, any>
			fileHeaders?: Record<string, FileHeader>
			filters?: Record<string, any>
			actions?: Record<string, any>
		}
		expand?:
			| boolean
			| ((
					token: DesignToken,
					options: Config,
					platform?: PlatformConfig
			  ) => boolean)
		platforms?: Record<string, PlatformConfig>
		parsers?: string[]
		preprocessors?: string[]
		usesDtcg?: boolean
	}

	interface StyleDictionaryInstance {
		options: Config
		config: Config
		buildAllPlatforms(): Promise<void>
		buildPlatform(platform: string): Promise<void>
		formatAllPlatforms(): Promise<void>
		formatPlatform(platform: string): Promise<void>
		cleanAllPlatforms(): Promise<void>
		cleanPlatform(platform: string): Promise<void>
		extend(config: string | Config): StyleDictionaryInstance
	}

	interface StyleDictionaryStatic {
		VERSION: string
		(config: string | Config): StyleDictionaryInstance
		new (config?: string | Config): StyleDictionaryInstance
		registerTransform(transform: Transform): void
		registerTransformGroup(group: { name: string; transforms: string[] }): void
		registerFormat(format: Format): void
		registerFilter(filter: Filter): void
		registerAction(action: {
			name: string
			do: (dictionary: Dictionary, config: Config) => void
		}): void
		registerParser(parser: { name: string; parse: (file: any) => any }): void
		registerPreprocessor(preprocessor: {
			name: string
			preprocessor: (tokens: any) => any
		}): void
		hooks: {
			transformGroups: Record<string, string[]>
			[key: string]: any
		}
	}

	const StyleDictionary: StyleDictionaryStatic
	export default StyleDictionary
}

declare module 'style-dictionary/utils' {
	import type { Config, File } from 'style-dictionary'

	export function fileHeader(args: {
		file?: File
		commentStyle?: 'short' | 'xml' | 'long'
		formatting?: any
		options?: Config
	}): Promise<string>

	export function usesReferences(token: any): boolean
	export function getReferences(token: any): any[]
	export function resolveReferences(tokens: any, options?: any): any
	export function outputReferencesFilter(token: any, options: any): boolean
	export function outputReferencesTransformed(token: any, options: any): any
	export function flattenTokens(tokens: any): any[]
	export function convertTokenData(tokens: any): any
	export function stripMeta(token: any): any
}
