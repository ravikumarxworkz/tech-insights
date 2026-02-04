// Import all topic data
import { javaData } from './java';
import { pythonData } from './python';
import { dotnetData } from './dotnet';
import { mysqlData } from './mysql';
import { gitData } from './git';
import { dsaData } from './dsa';

// Export combined topicData object
export const topicData = {
  java: javaData,
  python: pythonData,
  dotnet: dotnetData,
  mysql: mysqlData,
  git: gitData,
  github: gitData, // Alias for git
  dsa: dsaData
};

// Export individual topics for direct imports if needed
export { javaData, pythonData, dotnetData, mysqlData, gitData, dsaData };