import * as fs from 'fs';
import { readFilesData } from '../readFilesData.util';

// Simulamos la función readFileSync de fs para los tests
jest.mock('fs', () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readFileSync: jest.fn((path: string, _: string) => {
    if (path === 'valid-file.txt') {
      return 'This is the file content';
    }
    throw new Error('File not found');
  }),
}));

describe('Test:common:util:readFilesData', () => {
  it('should read the content of a valid file', () => {
    const path = 'valid-file.txt';
    const result = readFilesData(path);
    expect(result).toBe('This is the file content');
    expect(fs.readFileSync).toHaveBeenCalledWith(path, 'utf8');
  });

  it('should throw an error for an invalid file', () => {
    const path = 'invalid-file.txt';
    expect(() => {
      readFilesData(path);
    }).toThrowError('Error in function readFilesData: Error: File not found');
    expect(fs.readFileSync).toHaveBeenCalledWith(path, 'utf8');
  });
});
