let clciks = 0;
let currentUpgrade = 1;
let upgradeCost = 10;
let buttonOnOff = false;

let Cookie = document. getElementById("cookie");
let js = document. getElementById("Upgrade");
let js2 = document.getElementById("upgrade");
let js3 = document.getElementById("upgrade cost");

function button(){

if (clciks >= upgradeCost){
  buttonOnOff = true;

 } else {

  buttonOnOff = false;
}

switch(buttonOnOff){
  case false:
    js.disabled = true;
    js.value = "UPGRADE NOT AVALIBLE";
    
    break;

  case true:
    js.disabled = false;
    js.value = "UPGRADE AVALIBLE!";
    break;
}}

function cClick() {
  
  clciks = clciks + currentUpgrade;
  Cookie.value = clciks;

}

function upGrade() {

  currentUpgrade = currentUpgrade + 1;
  clciks = clciks - upgradeCost;
  upgradeCost = upgradeCost + 10

  Cookie.value = clciks;
  js2.innerHTML = currentUpgrade;
  js3.innerHTML = upgradeCost;
  js.addEventListener("click", button);

}
console.log("it works")