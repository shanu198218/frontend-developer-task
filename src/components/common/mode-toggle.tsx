// src/components/mode-toggle.tsx
'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="z-50 dark:bg-card rounded-md bg-white  my-2"
        align="end"
      >
        <DropdownMenuItem
          className="
    border-0
    hover:border-0 hover:border-transparent
    focus:border-0 focus:outline-none focus-visible:ring-0
    data-[highlighted]:outline-none data-[highlighted]:ring-0
    focus:bg-slate-100 w-24 text-center rounded-md  dark:focus:bg-white/5 
  "
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="my-1  border-0
    hover:border-0 hover:border-transparent
    focus:border-0 focus:outline-none focus-visible:ring-0
    data-[highlighted]:outline-none data-[highlighted]:ring-0
    focus:bg-slate-100 w-24 text-center rounded-md   dark:focus:bg-white/5  "
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="my-1  border-0
    hover:border-0 hover:border-transparent
    focus:border-0 focus:outline-none focus-visible:ring-0
    data-[highlighted]:outline-none data-[highlighted]:ring-0
    focus:bg-slate-100 dark:focus:bg-white/5 w-24 text-center rounded-md   "
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
