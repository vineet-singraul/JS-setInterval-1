let Isname = true;
setInterval(()=>{
  let tite = document.querySelector("#tit") ;

  tite.innerHTML = Isname?"Hello":"Byyyyyy"
  Isname = !Isname;
})