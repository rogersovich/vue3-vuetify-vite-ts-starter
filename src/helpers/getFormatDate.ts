import { MONTH_NAMES } from '@/constant/dashboard';

export const formatDatePicker = ({
  month,
  year,
}: {
  month: number;
  year: number;
}) => {
  const date = `${MONTH_NAMES[month]} ${year}`;
  return date;
};
