# @philiprehberger/react-theme-provider

[![CI](https://github.com/philiprehberger/ts-react-theme-provider/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-react-theme-provider/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/react-theme-provider.svg)](https://www.npmjs.com/package/@philiprehberger/react-theme-provider)
[![License](https://img.shields.io/github/license/philiprehberger/ts-react-theme-provider)](LICENSE)

Dark/light/system theme provider for React with localStorage persistence and system preference detection

## Installation

```bash
npm install @philiprehberger/react-theme-provider
```

## Usage

### ThemeProvider

Wrap your app with the provider:

```tsx
import { ThemeProvider } from '@philiprehberger/react-theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <YourApp />
    </ThemeProvider>
  );
}
```

### useTheme

Access theme state from any component:

```tsx
import { useTheme } from '@philiprehberger/react-theme-provider';

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  // theme: 'light' | 'dark' | 'system'
  // resolvedTheme: 'light' | 'dark' (actual applied theme)
}
```

### ThemeToggle

Pre-built toggle component with sun/moon/system icons:

```tsx
import { ThemeToggle } from '@philiprehberger/react-theme-provider';

<ThemeToggle />
```

## API

| Export | Type | Description |
|--------|------|-------------|
| `ThemeProvider` | Component | Context provider with localStorage persistence and system preference detection |
| `useTheme()` | Hook | Returns `{ theme, setTheme, resolvedTheme }` for reading/setting theme |
| `ThemeToggle` | Component | Pre-built three-way toggle (light/dark/system) with sun/moon/system icons |
| `Theme` | Type | `'light' \| 'dark' \| 'system'` |
| `ResolvedTheme` | Type | `'light' \| 'dark'` (the actual applied theme) |
| `ThemeContextType` | Type | Shape of the theme context value |
| `ThemeProviderProps` | Type | Props for `ThemeProvider` (`children`, `storageKey?`, `defaultTheme?`) |
| `ThemeToggleProps` | Type | Props for `ThemeToggle` (`className?`, `activeClassName?`, `inactiveClassName?`) |

## How It Works

- Applies `light` or `dark` class to `document.documentElement`
- Persists user preference to `localStorage`
- Listens for system `prefers-color-scheme` changes when set to `system`
- Works with Tailwind CSS `dark:` variant out of the box


## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
