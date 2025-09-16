import { ReactNode } from 'react';

export interface serviceItemProps {
  testId: string;
  serviceName: string;
  serviceDescription: string;
  onPress: () => void;
  hasForwardIcon?: boolean;
  renderCustomTrailingIcon?: () => ReactNode;
}