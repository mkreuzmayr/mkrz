import { cac } from 'cac';
import { init } from './commands/index.js';
import { getCliVersion } from './utils/get-cli-version.js';

export const cli = cac('mkrz');

const version = getCliVersion();

cli.version(version);

cli.command('init [template]', 'Initialize a new project').action(init);
