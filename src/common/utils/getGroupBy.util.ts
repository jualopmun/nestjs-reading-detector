export function getGroupBy<T>(arrayObject: T[], key: string) {
  return arrayObject.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
