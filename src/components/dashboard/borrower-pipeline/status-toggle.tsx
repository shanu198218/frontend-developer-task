'use client';

import { useState } from 'react';
import { RadioGroup } from '../../ui/radio-group'; // ShadCN UI import

interface StatusToggleProps {
  value?: 'Enabled' | 'Disabled';
  onChange?: (value: 'Enabled' | 'Disabled') => void;
}

export default function StatusToggle({
  value = 'Enabled',
  onChange,
}: StatusToggleProps) {
  const [status, setStatus] = useState<'Enabled' | 'Disabled'>(value);

  const handleChange = (val: 'Enabled' | 'Disabled') => {
    setStatus(val);
    onChange?.(val);
  };

  return (
    <div className="pt-4">
      <div className="text-xs dark:text-white/75 text-black uppercase mb-2">
        F-SANITISED ACTIVE
      </div>

      <RadioGroup
        value={status}
        onValueChange={handleChange}
        className="flex items-center gap-2"
      >
        <RadioGroup
          value="Enabled"
          className={`cursor-pointer px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            status === 'Enabled'
              ? 'bg-cyan-700 text-white'
              : 'bg-background dark:bg-card border border-white/20 text-black dark:text-white/75'
          }`}
        >
          Enabled
        </RadioGroup>

        <RadioGroup
          value="Disabled"
          className={`cursor-pointer px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            status === 'Disabled'
              ? 'bg-yellow-400 text-black'
              : 'bg-background dark:bg-card border border-white/20 text-black dark:text-white/75'
          }`}
        >
          Disabled
        </RadioGroup>
      </RadioGroup>
    </div>
  );
}
