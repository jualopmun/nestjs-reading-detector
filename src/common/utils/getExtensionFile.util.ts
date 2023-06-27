export function getExtensionFile(file: string): string {
  if (!file.includes('.')) throw Error(`Error ${file} is not extension`);
  return file.split('.').pop();
}
