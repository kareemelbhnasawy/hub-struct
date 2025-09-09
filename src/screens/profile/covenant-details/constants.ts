import { Covenant } from '@/screens/profile/covenants/interface';

export type DetailRow = { id: string; label: string; value: string };

export const covenantDetailsDataHandler = (covenant?: Covenant): DetailRow[] => {
  return [
    {
      id: 'number',
      label: 'profile.covenants.number',
      value:
        covenant?.covenantId && covenant?.covenantId !== null
          ? String(covenant.covenantId)
          : 'profile.emptyDataMsg',
    },
    {
      id: 'type',
      label: 'profile.covenants.type',
      value: covenant?.covenantType ?? 'profile.emptyDataMsg',
    },
    {
      id: 'registeredAt',
      label: 'profile.covenants.registeredAt',
      value: covenant?.registrationDate ?? 'profile.emptyDataMsg',
    },
  ];
};
