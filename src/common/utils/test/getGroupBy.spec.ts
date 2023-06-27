import { getGroupBy } from '../getGroupBy.util';

describe('Test:common:util:getGroupBy', () => {
  it('should group objects in array by a given key', () => {
    const array = [
      { id: 1, category: 'A' },
      { id: 2, category: 'B' },
      { id: 3, category: 'A' },
      { id: 4, category: 'B' },
    ];

    const result = getGroupBy(array, 'category');

    expect(result).toEqual({
      A: [
        { id: 1, category: 'A' },
        { id: 3, category: 'A' },
      ],
      B: [
        { id: 2, category: 'B' },
        { id: 4, category: 'B' },
      ],
    });
  });

  it('should handle empty array correctly', () => {
    const array: any[] = [];
    const result = getGroupBy(array, 'category');

    expect(result).toEqual({});
  });

  it('should handle array with missing keys correctly', () => {
    const array = [{ id: 1, category: 'A' }, { id: 2 }, { id: 3, category: 'A' }, { id: 4 }];

    const result = getGroupBy(array, 'category');

    expect(result).toEqual({
      A: [
        { id: 1, category: 'A' },
        { id: 3, category: 'A' },
      ],
      undefined: [{ id: 2 }, { id: 4 }],
    });
  });
});
