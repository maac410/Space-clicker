let clciks = 0;
let currentUpgrade = 1;
let upgradeCost = 10;
let buttonOnOff = false;

let Cookie = document. getElementById("cookie");
let Upgrade = document. getElementById("Upgrade");
let js2 = document.getElementById("upgrade");
let js3 = document.getElementById("upgrade cost");

function button(){
  clciks = clciks + currentUpgrade;
  Cookie.value = clciks;

if (clciks <= upgradeCost  ){
  Upgrade.disabled = true;
  buttonOnOff = true;
  Upgrade.value = "...";
}
  else{
    Upgrade.disabled = false;
    buttonOnOff = false;
    Upgrade.value = "...!";
}}

function upGrade() {
  currentUpgrade = currentUpgrade + 1;
  clciks = clciks - upgradeCost;
  upgradeCost = upgradeCost + 10
}

function upGradeDis(){
  Cookie.value = clciks;
  js2.innerHTML = currentUpgrade;
  js3.innerHTML = upgradeCost;
  console.log("It works");
}

Cookie.addEventListener("click", button);
Upgrade.addEventListener('click',() => {    
  upGrade();
  upGradeDis();  
  button();  
});
upGradeDis();