import { format, parseISO } from "date-fns";

export function formatDate(date: string | Date) {
  return format(parseISO(date.toString()), "dd/MM/yyyy");
}

export function formatTime(date: string | Date) {
  return format(parseISO(date.toString()), "HH:mm:ss");
}

export function formatDateTime(date: string | Date) {
  return format(parseISO(date.toString()), "dd/MM/yyyy - HH:mm");
}
