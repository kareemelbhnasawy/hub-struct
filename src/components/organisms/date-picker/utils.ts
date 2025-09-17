/* eslint-disable quotes */
import moment from 'moment-hijri';
import { CalendarType } from './interface';

export const GREG_MONTHS_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const GREG_MONTHS_AR = [
  'يناير',
  'فبراير',
  'مارس',
  'أبريل',
  'مايو',
  'يونيو',
  'يوليو',
  'أغسطس',
  'سبتمبر',
  'أكتوبر',
  'نوفمبر',
  'ديسمبر',
];

export const HIJRI_MONTHS_EN = [
  'Muharram',
  'Safar',
  "Rabi' al-Awwal",
  "Rabi' al-Thani",
  'Jumada al-Awwal',
  'Jumada al-Thani',
  'Rajab',
  "Sha'ban",
  'Ramadan',
  'Shawwal',
  'Dhu al-Qadah',
  'Dhu al-Hijjah',
];

export const HIJRI_MONTHS_AR = [
  'محرم',
  'صفر',
  'ربيع الأول',
  'ربيع الآخر',
  'جمادى الأولى',
  'جمادى الآخرة',
  'رجب',
  'شعبان',
  'رمضان',
  'شوال',
  'ذو القعدة',
  'ذو الحجة',
];

export const WEEK_DAYS_EN = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
// Short, narrow Arabic day names to fit in 1/7 cell
export const WEEK_DAYS_AR = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];

export const clampDate = (date: Date, min?: Date, max?: Date) => {
  if (min && date < min) return min;
  if (max && date > max) return max;
  return date;
};

export const toStartOfDay = (date: Date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

export const addMonths = (date: Date, months: number, type: CalendarType) => {
  if (type === 'hijri') return moment(date).add(months, 'iMonth').toDate();
  return moment(date).add(months, 'month').toDate();
};

export const addYears = (date: Date, years: number, type: CalendarType) => {
  if (type === 'hijri') return moment(date).add(years, 'iYear').toDate();
  return moment(date).add(years, 'year').toDate();
};

export const getMonthLabel = (
  date: Date,
  type: CalendarType,
  locale: 'ar' | 'en',
) => {
  if (type === 'hijri') {
    const m = moment(date);
    const iMonth = m.iMonth();
    const label = (locale === 'ar' ? HIJRI_MONTHS_AR : HIJRI_MONTHS_EN)[iMonth];
    const year = m.iYear();
    return `${label} ${year}`;
  }
  const m = moment(date);
  const month = m.month();
  const label = (locale === 'ar' ? GREG_MONTHS_AR : GREG_MONTHS_EN)[month];
  return `${label} ${m.year()}`;
};

export const getMonthIndex = (date: Date, type: CalendarType) => {
  if (type === 'hijri') return moment(date).iMonth();
  return moment(date).month();
};

export const setMonth = (
  date: Date,
  monthIndex: number,
  type: CalendarType,
) => {
  if (type === 'hijri') return moment(date).iMonth(monthIndex).toDate();
  return moment(date).month(monthIndex).toDate();
};

export const setYear = (date: Date, year: number, type: CalendarType) => {
  if (type === 'hijri') return moment(date).iYear(year).toDate();
  return moment(date).year(year).toDate();
};

export type DayCell = {
  date: Date;
  label: number; // iDate for hijri, date() for gregorian
  isCurrentMonth: boolean;
};

export const buildMonthMatrix = (
  anchorDate: Date,
  type: CalendarType,
): DayCell[][] => {
  const m = moment(anchorDate);
  const start =
    type === 'hijri' ? m.clone().startOf('iMonth') : m.clone().startOf('month');
  const daysInMonth = type === 'hijri' ? m.iDaysInMonth() : m.daysInMonth();

  // first weekday index (0 Sun .. 6 Sat)
  const firstWeekDay = start.day();

  const cells: DayCell[] = [];

  // previous month trailing days
  for (let i = 0; i < firstWeekDay; i++) {
    const d = start.clone().subtract(firstWeekDay - i, 'day');
    cells.push({
      date: d.toDate(),
      // moment-hijri exposes iDate() on moment instances
      label: type === 'hijri' ? d.iDate() : d.date(),
      isCurrentMonth: false,
    });
  }

  // current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const d = type === 'hijri' ? start.clone().iDate(i) : start.clone().date(i);
    cells.push({
      date: d.toDate(),
      label: type === 'hijri' ? d.iDate() : d.date(),
      isCurrentMonth: true,
    });
  }

  // next month leading days to fill 6 weeks (42 cells)
  while (cells.length % 7 !== 0) {
    const last = moment(cells[cells.length - 1].date);
    const d = last.clone().add(1, 'day');
    cells.push({
      date: d.toDate(),
      label: type === 'hijri' ? d.iDate() : d.date(),
      isCurrentMonth: false,
    });
  }
  while (cells.length < 42) {
    const last = moment(cells[cells.length - 1].date);
    const d = last.clone().add(1, 'day');
    cells.push({
      date: d.toDate(),
      label: type === 'hijri' ? d.iDate() : d.date(),
      isCurrentMonth: false,
    });
  }

  // chunk into weeks of 7
  const matrix: DayCell[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    matrix.push(cells.slice(i, i + 7));
  }
  return matrix;
};

export const isSameDay = (a?: Date | null, b?: Date | null) => {
  if (!a || !b) return false;
  return moment(a).isSame(b, 'day');
};

export const isInRange = (
  target: Date,
  start?: Date | null,
  end?: Date | null,
) => {
  if (!start || !end) return false;
  const t = moment(target).startOf('day').valueOf();
  const s = moment(start).startOf('day').valueOf();
  const e = moment(end).startOf('day').valueOf();
  return t >= s && t <= e;
};

export const sortRange = (a?: Date | null, b?: Date | null) => {
  if (!a && !b) return { start: null, end: null };
  if (a && !b) return { start: a, end: null };
  if (!a && b) return { start: b, end: null };
  const mA = moment(a as Date);
  const mB = moment(b as Date);
  return mA.isBefore(mB) ? { start: a!, end: b! } : { start: b!, end: a! };
};
