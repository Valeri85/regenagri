import { component$, createContextId, useContextProvider, useStore, useVisibleTask$, Slot } from '@builder.io/qwik';

export interface ThemeState {
  colorMode: 'light' | 'dark';
  setColorMode: (mode: 'light' | 'dark') => void;
}

export const ThemeContext = createContextId<ThemeState>('theme-context');

export const ThemeProvider = component$(() => {
  const themeState = useStore<ThemeState>({
    colorMode: 'light',
    setColorMode: (mode: 'light' | 'dark') => {
      themeState.colorMode = mode;
      
      if (typeof window !== 'undefined') {
        const root = document.documentElement;
        
        // Remove existing theme classes
        root.classList.remove('light-theme', 'dark-theme');
        
        // Add new theme class
        root.classList.add(`${mode}-theme`);
        
        // Persist preference
        window.localStorage.setItem('color-mode', mode);
      }
    }
  });

  useContextProvider(ThemeContext, themeState);

  // Initialize theme on client
  useVisibleTask$(() => {
    const getInitialColorMode = () => {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
      
      if (hasPersistedPreference) {
        return persistedColorPreference as 'light' | 'dark';
      }
      
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
      
      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }
      
      return 'light';
    };

    const initialMode = getInitialColorMode();
    themeState.colorMode = initialMode;
  });

  return <Slot />;
});