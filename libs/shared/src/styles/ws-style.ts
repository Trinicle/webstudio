import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function wsStyle(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
