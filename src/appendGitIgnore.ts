import fs from 'fs';

const filesToIgnore = [
  'cypress/downloads',
  'cypress/screenshots',
  'cypress/videos',
  'cypress/logs',
];

const appendGitIgnore = () => {
  if (!fs.existsSync('.gitignore')) {
    fs.writeFileSync('.gitignore', '');
  }

  const content = fs.readFileSync('.gitignore', 'utf8');

  // Remove duplicates if they already exist in .gitignore.
  const uniqueLines = filesToIgnore.filter((line) => !content.includes(line));
  const newContent = `${content}
# Cypress files
${uniqueLines.join('\n')}
`;

  fs.writeFileSync('.gitignore', newContent);
};

export default appendGitIgnore;
