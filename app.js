document.querySelector("#seccont").onclick = (e) => {
  if (["x", "-", "+", "/", "="].indexOf(e.target.dataset.value) > -1) {
    num1=document.querySelector("input").value
    islem(e.target.dataset.value);
  } else if (e.target.dataset.value == "C") {
    document.querySelector("input").value = "";
  } else {
    document.querySelector("input").value += e.target.dataset.value;
  }
};
let num1 = 0;
function islem(number) {
  if (number != "") {
      number=="x" ? 
    // number=="x"? 'çarpma işlemi'
    //number =="/" ? 'bölme işlemi'
    //number =="+" ? 'toplama işlemi'
    //number =="-" ? 'çıkarma işlemi'
    //number =="=" ? 'sonuç işlemi'
  }
}
