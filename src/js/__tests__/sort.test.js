import sortPersonsgeByHealth from "../sort";

test('test sortPersonsByHealth function',()=>{
let arr1 = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'бард', health: 100},
    {name: 'лучник', health: 80},
    {name: 'некромант', health: 180}
  ];

  let arr2 = [
    {name: 'некромант', health: 180},
    {name: 'маг', health: 100},
    {name: 'бард', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
  const result = sortPersonsgeByHealth(arr1);
  expect(result).toEqual(arr2);
})

test('test sortPersonsByHealth function',()=>{
    let arr1 = [
        {name: 'лучник', health: 180},
        {name: 'маг', health: 100},
        {name: 'мечник', health: 10},
      ];
    
      let arr2 = [
        {name: 'лучник', health: 180},
        {name: 'маг', health: 100},
        
        {name: 'мечник', health: 10}
      ];
      const result = sortPersonsgeByHealth(arr1);
      expect(result).toEqual(arr2);
    })

