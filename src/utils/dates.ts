const zeroLeft = (v: number) => String(v).padStart(2, '0');

export const yearsFrom = (year: number) => {
  return new Date().getFullYear() - year;
};

export const toDateInput = (date: Date) => {
  const [yy, mm, dd] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  return `${yy}-${zeroLeft(mm)}-${zeroLeft(dd)}`;
};

export const toTimeInput = (date: Date) => {
  const [hh, mm] = [date.getHours(), date.getMinutes()];
  return `${zeroLeft(hh)}:${zeroLeft(mm)}`;
};
