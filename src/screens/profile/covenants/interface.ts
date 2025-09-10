export type Covenant = {
  covenantId: string | number;
  covenantName: string;
  covenantType?: string | null;
  // registrationDate?: string | null;
};

export type CovenantDetailsParams = {
  covenant: Covenant;
};
