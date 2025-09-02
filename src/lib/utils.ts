import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncate = (s?: string, n = 250) => {
    if (!s) return '';
    return s.length > n ? s.slice(0, n) + '...' : s;
  };
