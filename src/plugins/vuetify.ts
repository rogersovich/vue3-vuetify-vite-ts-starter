/**
 * Vuetify3 Plugin
 */
import {
  createVuetify,
  type ThemeDefinition,
  type VuetifyOptions,
} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as labsComponents from 'vuetify/labs/components';
// Translations provided by Vuetify
import { en } from 'vuetify/locale';

// Misc
import { loadFonts } from '@/plugins/webfontloader';

// Styles
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

await loadFonts();

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#6E7DA5',
    'primary-50': '#E1F4FE',
    'primary-100': '#B6BBD0',
    'primary-200': '#888FB0',
    'primary-300': '#5B6591',
    'primary-500': '#04A5F4',
    'primary-600': '#0796E5',
    'primary-700': '#0984D1',
    'primary-900': '#08539A',
    secondary: '#03DAC6',
    'secondary-blue-dark': '#000037',
    'secondary-dark': '#12204D',
    'secondary-blue': '#559BD9',
    'secondary-orange': '#F15D2B',
    'secondary-red': '#EC4B5A',
    'secondary-gray': '#6E7DA5',
    error: '#E53935',
    info: '#559BD9',
    success: '#09A262',
    'warning-red': '#FF2442',
    'warning-green': '#09A262',
  },
};
const customThemeDark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#12204D',
    surface: '#6E7DA5',
    'primary-50': '#E1F4FE',
    'primary-100': '#B6BBD0',
    'primary-200': '#888FB0',
    'primary-300': '#E1F4FE',
    'primary-500': '#04A5F4',
    'primary-600': '#0796E5',
    'primary-700': '#0984D1',
    'primary-900': '#08539A',
    secondary: '#03DAC6',
    'secondary-blue-dark': '#fff',
    'secondary-dark': '#fff',
    'secondary-blue': '#559BD9',
    'secondary-orange': '#F15D2B',
    'secondary-red': '#EC4B5A',
    'secondary-gray': '#6E7DA5',
    error: '#E53935',
    info: '#559BD9',
    success: '#09A262',
    'warning-red': '#FF2442',
    'warning-green': '#09A262',
  },
};

let vuetifyConfig: VuetifyOptions = {
  defaults: {
    // global: {
    //   ripple: false,
    // },
    // VSheet: {
    //   elevation: 4,
    // },
  },
  // Icon Fonts
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  // Internationalization (i18n)
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en },
  },
  // Theme
  theme: {
    defaultTheme: 'light',
    themes: {
      light: customTheme,
      dark: customThemeDark,
    },
  },
};

if (import.meta.env.DEV) {
  // Disable treeshaking for DEV mode.
  vuetifyConfig = {
    components: { components, labsComponents },
    directives,
    ...vuetifyConfig,
  };
}
export default createVuetify(vuetifyConfig);

// Export for test.
export { components, directives };
