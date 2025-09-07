export interface QualificationItemProps {
  testId: string;
  qualificationName: string;
  institutionText: string;
  dateText: string;
  status: 'completed' | 'in-progress';
  onPress: () => void;
}

export type QualificationItemDataType = {
  id: string;
  qualificationName: string;
  institutionText: string;
  dateText: string;
  status: 'completed' | 'in-progress';
  onPress: () => void;
};
