import path from 'path';
import fs from 'fs-extra';
import { PROJECT_ROOT } from './constants.js';

type PackageJson = {
  version?: string;
};

export function getCliVersion() {
  const packageJson = fs.readJsonSync(
    path.join(PROJECT_ROOT, 'package.json'),
  ) as PackageJson | undefined;

  if (typeof packageJson?.version !== 'string') {
    throw new Error('error reading package.json');
  }

  return packageJson.version;
}
