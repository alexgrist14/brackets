module.exports = function check(str, bracketsConfig) {

  bracketsConfig = bracketsConfig.map((item) => {

    return item[0] + item[1];
  });

  let item1 = bracketsConfig[0];
  let item2 = bracketsConfig[1];
  let item3 = bracketsConfig[2];
  let item4 = bracketsConfig[3];
  let item5 = bracketsConfig[4];


  for(let i=0; i<40;i++)
  {
      if (~str.indexOf(item1)) 
      {
        str = str.replace(item1, "");
      }
      if (~str.indexOf(item2)) 
      {
        str = str.replace(item2, "");
      }
      if (~str.indexOf(item3)) 
      {
        str = str.replace(item3, "");
      }
      if (~str.indexOf(item4)) 
      {
        str = str.replace(item4, "");
      }
      if (~str.indexOf(item5)) 
      {
        str = str.replace(item5, "");
      }
  }
  if (str.length <= 0)
    return true;
  return false;
}

function remove(){

}