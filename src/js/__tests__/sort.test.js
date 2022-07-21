import sortPersonsgeByHealth from '../sort';

test('test sortPersonsByHealth function', () => {
  const arr1 = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'бард', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'некромант', health: 180 },
  ];

  const arr2 = [
    { name: 'некромант', health: 180 },
    { name: 'маг', health: 100 },
    { name: 'бард', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = sortPersonsgeByHealth(arr1);
  expect(result).toEqual(arr2);
});

test('test sortPersonsByHealth function', () => {
  const arr1 = [
    { name: 'лучник', health: 180 },
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
  ];

  const arr2 = [
    { name: 'лучник', health: 180 },
    { name: 'маг', health: 100 },

    { name: 'мечник', health: 10 },
  ];
  const result = sortPersonsgeByHealth(arr1);
  expect(result).toEqual(arr2);
});
