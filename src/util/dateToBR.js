export default function dateToBR(date) {
  return date.toISOString().split('T')[0].split('-').reverse().join('/');
}
