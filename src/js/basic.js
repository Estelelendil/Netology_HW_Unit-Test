const checkHealt = function (obj) {
  if (obj.health < 15) {
    return 'critical';
  }
  if (obj.health > 50) {
    return 'healthy';
  } return 'wounded';
};
export default checkHealt;
