declare module 'style-dictionary' {
	interface StyleDictionaryConfig {
		source?: string[]
		platforms?: Record<string, never>
		[key: string]: never
	}

	interface StyleDictionaryToken {
		name: string
		path: string[]
		value: never
		type?: string
		original?: never
	}

	interface StyleDictionaryFormatArgs {
		dictionary: {
			allTokens: StyleDictionaryToken[]
		}
		file: {
			destination: string
			format: string
			options?: never
		}
		platform?: never
	}

	interface StyleDictionaryInstance {
		buildAllPlatforms(): Promise<void>
	}

	interface StyleDictionaryStatic {
		(config: string | StyleDictionaryConfig): StyleDictionaryInstance
		new (config: string | StyleDictionaryConfig): StyleDictionaryInstance
		registerTransform(transform: {
			name: string
			type: string
			transform: (token: StyleDictionaryToken) => string
		}): void
		registerTransformGroup(group: { name: string; transforms: string[] }): void
		registerFormat(format: {
			name: string
			format: (args: StyleDictionaryFormatArgs) => Promise<string> | string
		}): void
		hooks: {
			transformGroups: {
				scss: string[]
				[key: string]: string[]
			}
		}
	}

	const StyleDictionary: StyleDictionaryStatic
	export default StyleDictionary
}

declare module 'style-dictionary/utils' {
	export function fileHeader(args: {
		file: { destination: string }
	}): Promise<string>
}
