module.exports = function solveEquation(equation) {
  let arr = equation.split(' ');
  arr[0] = parseInt(arr[0],10);

  if (arr[3] === '-') arr[4] = -parseInt(arr[4],10);
    else arr[4] = parseInt(arr[4],10);

  if (arr[7] === '-') arr[8] = -parseInt(arr[8],10);
    else arr[8] = parseInt(arr[8],10);
  
  arr.splice(1,3);
  arr.splice(2,3);
  let d = (arr[1]*arr[1]-4*arr[0]*arr[2])
  if (d >= 0) {
    let x1 = Math.round((-arr[1]+Math.sqrt(d))/(2*arr[0]));
    let x2 = Math.round((-arr[1]-Math.sqrt(d))/(2*arr[0]));
    
    if (x1 > x2) return [x2,x1]; else return [x1,x2];
  }
  
}
