import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Jean Pierre Polnaref',
    description: '',
    date: dateToday,
    student: 'Paul',
    archived: true,

  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    archived: false,
  },
];
