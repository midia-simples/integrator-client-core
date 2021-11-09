import { access } from 'fs/promises';
import { constants } from 'fs';

export default async function fileExists(path) {
  try {
    /* eslint no-bitwise: ["error", { "allow": ["|"] }] */
    await access(path, constants.R_OK | constants.W_OK);
    return true;
  } catch {
    return false;
  }
}
