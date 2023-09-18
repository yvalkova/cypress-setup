import fs from 'fs';

const appendPackageJson = () => {
  const packageJson = JSON.parse(
    fs.readFileSync('package.json', 'utf8'),
  ) as Record<string, any>;

  packageJson.scripts = {
    ...packageJson.scripts,
    e2e: 'cypress run',
    'e2e:dev': 'cypress open',
  };

  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
};

export default appendPackageJson;
