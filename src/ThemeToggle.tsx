import { type ReactNode } from 'react';
import { useTheme, type Theme } from './ThemeProvider';

const SunIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const SystemIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

interface ThemeOption {
  value: Theme;
  icon: () => ReactNode;
  label: string;
}

export interface ThemeToggleProps {
  /** CSS class for the outer container */
  className?: string;
  /** CSS class for the active button */
  activeClassName?: string;
  /** CSS class for inactive buttons */
  inactiveClassName?: string;
}

/**
 * Three-way theme toggle (light / dark / system).
 * Uses radio group semantics for accessibility.
 */
export function ThemeToggle({
  className = 'flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800',
  activeClassName = 'rounded-md p-2 transition-colors bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white',
  inactiveClassName = 'rounded-md p-2 transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const options: ThemeOption[] = [
    { value: 'light', icon: SunIcon, label: 'Light' },
    { value: 'dark', icon: MoonIcon, label: 'Dark' },
    { value: 'system', icon: SystemIcon, label: 'System' },
  ];

  return (
    <div className={className} role="radiogroup" aria-label="Theme selection">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          role="radio"
          aria-checked={theme === value}
          aria-label={`${label} theme`}
          className={theme === value ? activeClassName : inactiveClassName}
        >
          <Icon />
        </button>
      ))}
    </div>
  );
}
