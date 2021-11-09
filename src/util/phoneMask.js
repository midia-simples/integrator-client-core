// eslint-disable-next-line
export const celphoneMask = (str) => String(str).replace(/(\d{2})(\d{5})(\d{4})/g, '($1)$2-$3');
