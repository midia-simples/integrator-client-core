import { removeNotNumbers } from './removeNotNumbers';
import { celphoneMask } from './phoneMask';

// eslint-disable-next-line
export const protectEmail = (str) => {
  const username = str.split('@')[0];
  const domain = str.split('@')[1];
  const start = username.slice(0, 3);
  const end = username.slice(3);
  let ended = '';

  for (let i = 0; i < end.length; i += 1) {
    ended += '*';
  }

  return `${start + ended}@${domain}`;
};

// eslint-disable-next-line
export const protectPhoneNumber = (str) => {
  const value = celphoneMask(removeNotNumbers(str));
  const regex = /\((\d.+)\)(\d.+)-(\d.+)/gm;
  const subst = '($1)*****$3';

  return value.replace(regex, subst);
};
