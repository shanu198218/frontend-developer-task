import { tabs } from '../../../lib/data';
import { Tabs, TabsList, TabsTrigger } from '../../ui/tabs';
import { useState, useEffect } from 'react';

interface StatusTabsProps {
  onFilterChange?: (status: string) => void;
  value?: string;
}

export default function StatusTabs({ onFilterChange, value }: StatusTabsProps) {
  const [selectedTab, setSelectedTab] = useState(value || tabs[0]);

  useEffect(() => {
    if (value) setSelectedTab(value);
  }, [value]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    onFilterChange?.(tab);
  };

  return (
    <Tabs value={selectedTab} onValueChange={handleTabChange}>
      <TabsList className="space-x-2 bg-transparent border-2 mt-2 p-1">
        {tabs.map(tab => (
          <TabsTrigger
            key={tab}
            value={tab}
            className="md:px-4 md:py-2 px-2 py-2 rounded-md  transition-all duration-200 data-[state=active]:shadow-md data-[state=active]:scale-105"
            style={{
              backgroundColor:
                selectedTab === tab
                  ? tab === 'New'
                    ? '#3b82f6'
                    : tab === 'In Review'
                      ? '#ea580c'
                      : '#059669'
                  : 'transparent',
              color: selectedTab === tab ? 'black' : 'dark:white black',
            }}
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
