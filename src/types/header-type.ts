export type HeaderProps = {
  appName?: string;
  sectionLabel?: string;
  placeholder?: string;
  unreadCount?: number;
  onSearch?: (value: string) => void;
  onHelpClick?: () => void;
  onBellClick?: () => void;
  className?: string;
};
