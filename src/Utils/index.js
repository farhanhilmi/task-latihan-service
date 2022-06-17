import { dirname } from 'path';
import { fileURLToPath } from 'url';

const pathToFile = (path) => dirname(fileURLToPath(path));

// eslint-disable-next-line import/prefer-default-export
export { pathToFile };
