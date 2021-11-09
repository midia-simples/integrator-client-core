import { removeNotNumbers } from './removeNotNumbers';

export const cpfMask = (str) => String(str).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');

export const cnpjMask = (str) => String(str).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');

export const MaskCpfOrCnpjByLength = (
  document,
  documentOnlyNumbers = removeNotNumbers(document),
) => (documentOnlyNumbers.length > 11
  ? cnpjMask(documentOnlyNumbers)
  : cpfMask(documentOnlyNumbers));
