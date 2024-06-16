import * as dotenv from 'dotenv';
import { writeFileSync } from 'fs';
import { argv } from 'yargs';

dotenv.config();

const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
  ? './src/environments/environment.prod.ts'
  : './src/environments/environment.ts';

const envConfigFile = `
export const environment = {
  production: ${isProduction},
  apiUrl: '${isProduction ? process.env.API_PROD_URL : process.env.API_DEV_URL}'
};
`;

writeFileSync(targetPath, envConfigFile);
console.log(`Output generated at ${targetPath}`);
