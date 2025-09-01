
import * as React from 'react';
import { HelpCircle, Bell, Search, Moon, Sun } from 'lucide-react';

import { cn } from '../../../lib/utils';
import { ModeToggle } from '../mode-toggle';

type HeaderProps = {
  appName?: string;
  sectionLabel?: string;
  placeholder?: string;
  unreadCount?: number;
  onSearch?: (value: string) => void;
  onHelpClick?: () => void;
  onBellClick?: () => void;
  className?: string;
};

export default function Header({
  appName = 'DemoApp',
  sectionLabel = 'Loan Management',
  placeholder = 'Search borrowers, brokers…',
  unreadCount = 0,
  onSearch,
  onHelpClick,
  onBellClick,
  className,
}: HeaderProps) {
  const [q, setQ] = React.useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch?.(q.trim());
  }

  return (
    <header
      className={cn(
        'w-full border-b bg-white text-black dark:bg-card  dark:text-white border-white/10 dark:border-white/5 transition-colors',
        className
      )}
      role="banner"
    >
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center gap-3 p-10 px-3 sm:px-2">
        
        <div className="md:flex grid  min-w-0 items-center gap-2">
          <span className="md:text-[18px] text-base font-semibold tracking-tight">
            {appName}
          </span>
          {sectionLabel && (
            <span className="rounded-full bg-black/5 px-2.5 py-1 text-xs font-medium text-black/70 dark:bg-white/10 dark:text-white/90">
              {sectionLabel}
            </span>
          )}
        </div>

        <div className="flex-1" />

        {/* Search */}
        <form
          onSubmit={handleSubmit}
          className="relative hidden w-[380px] max-w-[52vw] items-center sm:flex"
          role="search"
          aria-label="Global"
        >
          <Search
            aria-hidden
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-black/40 dark:text-white/40"
          />
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            className="w-full rounded-lg border border-black/10 bg-black/[0.03] pl-9 pr-3 py-2 text-sm text-black placeholder:text-black/40 outline-none transition
                       focus:border-black/20 focus:bg-black/[0.05]
                       dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/20 dark:focus:bg-white/10"
            placeholder={placeholder}
          />
        </form>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <ModeToggle />

          <button
            type="button"
            onClick={onHelpClick}
            aria-label="Help"
            className="rounded-lg border border-black/10 bg-black/[0.03] p-2 text-black/80 hover:bg-black/[0.06]
                       dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
          >
            <HelpCircle className="size-4" />
          </button>

          <button
            type="button"
            onClick={onBellClick}
            aria-label="Notifications"
            className="relative rounded-lg border border-black/10 bg-black/[0.03] p-2 text-black/80 hover:bg-black/[0.06]
                       dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
          >
            <Bell className="size-4" />
            {unreadCount > 0 && (
              <span
                aria-label={`${unreadCount} unread`}
                className="absolute -right-1 -top-1 rounded-full bg-green-500 px-1.5 py-[1px] text-[10px] font-semibold text-black"
              >
                {unreadCount > 99 ? '99+' : unreadCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
