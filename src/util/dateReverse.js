export default function dateToISO(date) {
  const numbers = date.split('/');
  numbers.reverse();
  return numbers.join('-');
}
