export type BlogThemes = 'consumer-rights' | 'entrepreneurial-complaints' | 'air-travel-rights' | 'cybercrime-scams' | 'consumer-protection';

export type ComponentMappings = {
  [key in BlogThemes]: React.ReactNode;
};