const arrPers = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]
const sortPersonsgeByHealth = function(arr){
    const newArr = arr.sort(function(a,b){
        if (a.health < b.health) {
            return 1;
          }
          if (a.health > b.health) {
            return -1;
          }
          return 0;
    })
    return newArr;
}
console.log(sortPersonsgeByHealth(arrPers))
export default sortPersonsgeByHealth;