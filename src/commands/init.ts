import fs from 'fs-extra';
import { execSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { PROJECT_ROOT } from '~/utils/constants.js';
import kleur from 'kleur';

function getUsername() {
  try {
    return execSync('git config --get user.name').toString().trim();
  } catch (error) {
    return os.userInfo().username;
  }
}

function updatePackageJson() {
  const packageJsonText = fs
    .readFileSync(path.join(process.cwd(), 'package.json'))
    .toString()
    .replace('{{name}}', path.basename(process.cwd()))
    .replace('{{author}}', getUsername());

  fs.writeFileSync('package.json', packageJsonText);
}

function copyTemplate(template: string) {
  fs.copySync(path.join(PROJECT_ROOT, 'templates', template), process.cwd());
}

function readTemplates() {
  return fs.readdirSync(path.join(PROJECT_ROOT, 'templates'));
}

export function init(template: string) {
  if (!readTemplates().includes(template)) {
    console.error(kleur.red(`Template \"${template}\" not found`));
    return;
  }

  copyTemplate('default');
  copyTemplate(template);

  updatePackageJson();

  console.log(
    kleur.green(
      `Successfully initialized project with template \"${template}\"`,
    ),
  );
}
