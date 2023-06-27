import { getExtensionFile } from '../getExtensionFile.util';

describe('Test:common:util:getExtensionFile', () => {
  it('should return the file extension', () => {
    const file1 = 'document.txt';
    const extension1 = getExtensionFile(file1);
    expect(extension1).toBe('txt');

    const file2 = 'image.jpg';
    const extension2 = getExtensionFile(file2);
    expect(extension2).toBe('jpg');

    const file3 = 'script.js';
    const extension3 = getExtensionFile(file3);
    expect(extension3).toBe('js');
  });

  it('should handle files without an extension', () => {
    const file = 'fileWithoutExtension';
    expect(() => {
      getExtensionFile(file);
    }).toThrowError('Error fileWithoutExtension is not extension');
  });

  it('should handle files with multiple dots in the name', () => {
    const file = 'file.name.with.dots.txt';
    const extension = getExtensionFile(file);
    expect(extension).toBe('txt');

    const file2 = 'another.file.with.multiple.dots.js';
    const extension2 = getExtensionFile(file2);
    expect(extension2).toBe('js');
  });
});
