import checkHealt from '../basic';

test('should checkHealh', () => {
  const result = checkHealt({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

const dataList = [
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'лучник', health: 40 }, 'wounded'],
];
const hadler = test.each(dataList);
hadler('testing function with %s object', (obj, expected) => {
  const result = checkHealt(obj);
  expect(result).toBe(expected);
});
