import { fileURLToPath } from 'node:url';
import path from 'path';

export const PROJECT_ROOT = path.join(fileURLToPath(import.meta.url), '../..');
