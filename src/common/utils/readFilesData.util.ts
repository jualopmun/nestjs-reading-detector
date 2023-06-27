import * as fs from 'fs';

export function readFilesData(path: string): string {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return data;
  } catch (error) {
    throw Error(`Error in function readFilesData: ${error}`);
  }
}
