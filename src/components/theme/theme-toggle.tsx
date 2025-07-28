import { component$, useContext } from '@builder.io/qwik';
import { ThemeContext } from './theme-provider';

export const ThemeToggle = component$(() => {
  const theme = useContext(ThemeContext);

  return (
    <button
      class="theme-toggle"
      onClick$={() => {
        const newMode = theme.colorMode === 'light' ? 'dark' : 'light';
        theme.setColorMode(newMode);
      }}
      aria-label={`Switch to ${theme.colorMode === 'light' ? 'dark' : 'light'} mode`}
    >
      <span class="theme-toggle-icon">
        {theme.colorMode === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  );
});