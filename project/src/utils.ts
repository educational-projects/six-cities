import dayjs from 'dayjs';

export const getRating = (rating: number): string => `${(Math.round(rating) / 5) * 100}%`;

export const getFormatDate = (date: string, format: string): string => dayjs(date).format(format);
