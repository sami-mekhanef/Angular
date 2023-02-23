export enum Major{
  D = 'Doctorant',
  M2 = 'Master 2',
  M1 = 'Master 1',
  L3 = 'Licence 3',
  L2 = 'Licence 2',
  L1 = 'Licence 1',
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: string;
  major?: Major;
}
