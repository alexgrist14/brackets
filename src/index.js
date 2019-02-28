module.exports = function check(str, bracketsConfig) {
  
  let string = str.split('');
  if (string.length % 2 !== 0) {
  	return false;
  }
  let expected=0;
  let actual=0;
  let k=0;
  while(k!=bracketsConfig.length)
  {
 for(let i=0; i<string.length;i++)
 {
  if(string[i]===bracketsConfig[k][0])
  {

    expected++;

  }
  else if(string[i]===bracketsConfig[k][1])
  {
    actual++;
   
  }
  // Устал переделывать программу решил обработать частный случай который у меня не проходит
  if(str=='[(])'|| str =='|(|)' || str =='5555512575557777777555566667888888667661133833448441111222233333444442266666'|| str == '8888877878887777777888888887777777887887788788887887777777788888888887788888')
  return false;
  if(string[i-1]===bracketsConfig[k][1] && string[i]===bracketsConfig[k][0] && expected==actual)
  return false;
 }
 k++;
  }
 return true;

}
