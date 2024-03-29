#!/usr/bin/env node

const path = require('path')

const keysToCheck = [
	'borderWidth.focus',
	'button.borderWidth',
	'button.boxShadow.primary',
	'button.fontSize.lg',
	'button.fontSize.md',
	'button.fontSize.sm',
	'button.fontSize.xs',
	'button.fontWeight',
	'button.sizing.icon.lg',
	'button.sizing.icon.md',
	'button.sizing.icon.sm',
	'button.sizing.icon.xs',
	'button.spacing.x.lg',
	'button.spacing.x.md',
	'button.spacing.x.sm',
	'button.spacing.x.xs',
	'card.borderRadius',
	'card.boxShadow',
	'card.color.background.primary',
	'card.color.background.primaryDisabled',
	'card.color.border.base',
	'card.color.border.disabled',
	'card.color.border.elevated',
	'card.color.border.interaction',
	'checkboxRadio.sizing.lg',
	'checkboxRadio.sizing.md',
	'checkboxRadio.sizing.sm',
	'color.background.brand.primary',
	'color.background.brand.primaryDisabled',
	'color.background.brand.primaryInteraction',
	'color.background.brand.secondary',
	'color.background.brand.secondaryDisabled',
	'color.background.brand.secondaryInteraction',
	'color.background.error.primary',
	'color.background.error.primaryDisabled',
	'color.background.error.primaryInteraction',
	'color.background.error.secondary',
	'color.background.error.secondaryDisabled',
	'color.background.error.secondaryInteraction',
	'color.background.info.primary',
	'color.background.info.primaryDisabled',
	'color.background.info.primaryInteraction',
	'color.background.info.secondary',
	'color.background.info.secondaryDisabled',
	'color.background.info.secondaryInteraction',
	'color.background.neutral.primary',
	'color.background.neutral.primaryDisabled',
	'color.background.neutral.primaryInteraction',
	'color.background.neutral.secondary',
	'color.background.neutral.secondaryDisabled',
	'color.background.neutral.secondaryInteraction',
	'color.background.primary',
	'color.background.secondary',
	'color.background.success.primary',
	'color.background.success.primaryDisabled',
	'color.background.success.primaryInteraction',
	'color.background.success.secondary',
	'color.background.success.secondaryDisabled',
	'color.background.success.secondaryInteraction',
	'color.background.warning.primary',
	'color.background.warning.primaryDisabled',
	'color.background.warning.primaryInteraction',
	'color.background.warning.secondary',
	'color.background.warning.secondaryDisabled',
	'color.background.warning.secondaryInteraction',
	'color.border.brand.primary',
	'color.border.error.primary',
	'color.border.focus',
	'color.border.info.primary',
	'color.border.neutral.primary',
	'color.border.primary',
	'color.border.primaryInteraction',
	'color.border.secondary',
	'color.border.success.primary',
	'color.border.warning.primary',
	'color.text.brand.onPrimary',
	'color.text.brand.onSecondary',
	'color.text.brand.primary',
	'color.text.error.onPrimary',
	'color.text.error.onSecondary',
	'color.text.error.primary',
	'color.text.info.onPrimary',
	'color.text.info.onSecondary',
	'color.text.info.primary',
	'color.text.inverse',
	'color.text.neutral.onPrimary',
	'color.text.neutral.onSecondary',
	'color.text.neutral.primary',
	'color.text.primary',
	'color.text.quaternary',
	'color.text.secondary',
	'color.text.success.onPrimary',
	'color.text.success.onSecondary',
	'color.text.success.primary',
	'color.text.tertiary',
	'color.text.warning.onPrimary',
	'color.text.warning.onSecondary',
	'color.text.warning.primary',
	'dropdown.borderRadius',
	'dropdown.boxShadow',
	'duration.transition.base',
	'fontSize.base',
	'heading.fontSize.lg',
	'heading.fontSize.md',
	'heading.fontSize.sm',
	'heading.fontSize.xs',
	'heading.lineHeight',
	'input.borderWidth',
	'input.spacing.x',
	'inputButton.borderRadius.lg',
	'inputButton.borderRadius.md',
	'inputButton.borderRadius.sm',
	'inputButton.borderRadius.xs',
	'inputButton.sizing.height.lg',
	'inputButton.sizing.height.md',
	'inputButton.sizing.height.sm',
	'inputButton.sizing.height.xs',
	'menu.borderRadius.item',
	'modal.borderRadius',
	'modal.boxShadow',
	'modal.color.background.overlay',
	'modal.sizing.maxWidth.lg',
	'modal.sizing.maxWidth.md',
	'modal.sizing.maxWidth.sm',
	'modal.sizing.maxWidth.xs',
	'multiSelect.fontSize.multiValueLabel.lg',
	'multiSelect.fontSize.multiValueLabel.md',
	'multiSelect.fontSize.multiValueLabel.sm',
	'multiSelect.fontSize.multiValueLabel.xs',
	'multiSelect.spacing.multiValueLabel.x.lg',
	'multiSelect.spacing.multiValueLabel.x.md',
	'multiSelect.spacing.multiValueLabel.x.sm',
	'multiSelect.spacing.multiValueLabel.x.xs',
	'multiSelect.spacing.multiValueLabel.y.lg',
	'multiSelect.spacing.multiValueLabel.y.md',
	'multiSelect.spacing.multiValueLabel.y.sm',
	'multiSelect.spacing.multiValueLabel.y.xs',
	'notice.borderRadius',
	'ref.fontFamily.base',
	'ref.fontSize.lg',
	'ref.fontSize.md',
	'ref.fontSize.sm',
	'ref.fontSize.xs',
	'ref.fontWeight.bold',
	'ref.fontWeight.regular',
	'ref.lineHeight.lg',
	'ref.lineHeight.md',
	'ref.lineHeight.sm',
	'ref.lineHeight.xs',
	'ref.spacing.2xl',
	'ref.spacing.2xs',
	'ref.spacing.3xl',
	'ref.spacing.3xs',
	'ref.spacing.lg',
	'ref.spacing.md',
	'ref.spacing.sm',
	'ref.spacing.xl',
	'ref.spacing.xs',
	'spinner.sizing.lg',
	'spinner.sizing.md',
	'spinner.sizing.sm',
	'spinner.sizing.xs',
	'tabs.borderWidth.tab.bottom',
	'tag.borderRadius',
	'tag.borderWidth',
	'tag.fontSize.md',
	'tag.fontSize.sm',
	'tag.fontWeight',
	'tag.sizing.height.md',
	'tag.sizing.height.sm',
	'text.lineHeight',
	'textParagraph.fontSize.lg',
	'textParagraph.fontSize.md',
	'textParagraph.fontSize.sm',
	'textParagraph.fontSize.xs',
	'tooltip.boxShadow',
	'tooltip.color.background'
]

if (process.argv.length < 3) {
	console.error('Error: Pass path to the json file as an argument')
	return
}

const filePath = process.argv[2]
const data = require(path.resolve(process.cwd(), filePath))

function deeptest(key, data) {
	let s = key.split('.')
	let obj = data[s.shift()]
	while (obj && s.length) obj = obj[s.shift()]
	return obj
}

keysToCheck.forEach((item) => {
	if (!deeptest(item, data)) {
		console.log(item + ' key not defined')
	}
})

console.log('Phoenix Components check tokens completed.')
