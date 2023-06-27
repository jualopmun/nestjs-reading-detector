export function csvToJSON<T>(csv: string): T[] {
  const lines = csv.split('\n');
  const result: T[] = [];
  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    const obj = {};

    if (lines[i] == undefined || lines[i].trim() == '') {
      continue;
    }

    const words = lines[i].split(',');
    for (let j = 0; j < words.length; j++) {
      obj[headers[j].trim()] = words[j];
    }

    result.push(obj as T);
  }
  return result;
}
