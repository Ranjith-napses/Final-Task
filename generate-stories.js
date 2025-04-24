const fs = require('fs');
const path = require('path');

const folders = ['atoms', 'organisms', 'templates', 'pages'];

folders.forEach((folder) => {
  const dirPath = path.join(__dirname, 'src', folder);
  fs.readdirSync(dirPath).forEach((file) => {
    if (file.endsWith('.js')) {
      const baseName = file.replace('.js', '');
      const storyPath = path.join(__dirname, 'src/stories', folder);
      const storyFile = path.join(storyPath, `${baseName}.stories.js`);

      if (!fs.existsSync(storyPath)) fs.mkdirSync(storyPath, { recursive: true });
      if (fs.existsSync(storyFile)) return;

      const importPath = `../../${folder}/${baseName}`;

      const content = `
import React from 'react';
import ${baseName} from '${importPath}';

export default {
  title: '${folder.charAt(0).toUpperCase() + folder.slice(1)}/${baseName}',
  component: ${baseName},
};

export const Default = () => <${baseName} />;
`;
      fs.writeFileSync(storyFile, content.trim());
      console.log(`✅ Created story: ${storyFile}`);
    }
  });
});
