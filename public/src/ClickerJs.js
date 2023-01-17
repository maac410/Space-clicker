var clciks = 0;
var currentUpgrade = 1;
var upgradeCost = 10;
var buttonOnOff = false;

var Cookie = document. getElementById("cookie");
var js = document. getElementById("Upgrade");
var js2 = document.getElementById("upgrade");
var js3 = document.getElementById("upgrade cost");

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