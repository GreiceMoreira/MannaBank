import { Platform } from "react-native";

const tintColorLight = "7A9B6F"; /** Brand color */
const tintColorDark = "#8AAE7A";

/**  #005151 #036378 #40719b #7d7cb1  #b884b6 #e890ab */

/** Primary: #7A9B6F
Secondary: #D8C8A8
Accent: #4AA8FF
Light Background: #F8F6F0
Dark Background: #0E1116
 */

export const Colors = {
    light: {
        text: '#11181C' , /* text color */
        background: '#F8F6F0' ,
        tint: tintColorLight,
        icon: '#4AA8FF', /* unselected icon color */
        tabIconDefault: '#4AA8FF', /* default (unselected) tab bar icon color */
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#ECEDEE',
        background: '#0E1116',
        tint: tintColorDark,
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
    },

};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});