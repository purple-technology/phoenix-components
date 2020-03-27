const IS_PERCY = process.env.STORYBOOK_PERCY === 'true'

export const STORY_PARAMS = {
  options: {
    showPanel: IS_PERCY ? false : true,
    showNav: IS_PERCY ? false : true,
    panelPosition: 'bottom'
  },
  info: {
    inline: IS_PERCY ? false : true,
    header: false
  }
}
