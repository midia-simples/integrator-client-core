/* eslint-disable import/prefer-default-export */
import utf8 from 'utf8';

export function safeDecode(data) {
  try {
    const decoded = utf8.decoded(data);
    return decoded;
  } catch (e) {
    return data;
  }
}
