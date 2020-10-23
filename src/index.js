module.exports = function check(str, bracketsConfig) {
  let arrBrackets = [];
  let newStr = str;

  for(const item of bracketsConfig){
    arrBrackets.push(item[0] + item[1]);
  }

  for (let i = 0; i < str.length; i++){
    for(let j = 0; j < arrBrackets.length; j ++){
      newStr = newStr.replace(arrBrackets[j], '');
  }
  }
  if(newStr.length == 0){
    return true;
  }else{
    return false;
  }
}
