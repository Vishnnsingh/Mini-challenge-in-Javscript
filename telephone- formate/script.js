let tel = document.querySelector("#tel");
 function checkisNumber(str){
 return [...str].filter((v)=>Number.isInteger(+v) && v!==" ").join("") 
}

function formatenumber(str){
  str = checkisNumber(str);
  return str.length >3 ? `+(${str.substring(0,3)}) - ${str.substring(3)}`:str;
}

tel.addEventListener("input",()=>{
  tel.value = formatenumber(tel.value);
})
