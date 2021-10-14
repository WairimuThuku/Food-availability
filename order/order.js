const yourName = document.getElementById('name');
const personsName = document.getElementById('YourName');
let breakFastFood1 = 10;
let breakFastFood2 = 10;
let breakFastFood3 = 10;
let breakFastFood4 = 10;
let platesFood1 = 10;
let platesFood2 = 10;
let platesFood3 = 10;
let platesFood4 = 10;
let platesFood5 = 10;
let platesFood6 = 10;

  breakfast.addEventListener('submit',getInputText);
  lunch.addEventListener('submit',getInputText);

function getInputText(e){
  
    e.preventDefault();
  }
function order1(){
  if(plate1.checked ==true && breakFastFood1 >0){
    document.getElementById('first').innerHTML = personsName.value +" Tea and Mandazi is available. Please make payment";
    console.log(breakFastFood1);
    breakFastFood1 --;
    console.log(breakFastFood1);
}
else if (plate2.checked == true && breakFastFood2 >0){
    document.getElementById('first').innerHTML = personsName.value +" Coffee and bread is available. Please make payment"
    console.log(breakFastFood2);
    breakFastFood2 --;
    console.log(breakFastFood2);
}
else if (plate3.checked == true && breakFastFood3 > 0){
    document.getElementById('first').innerHTML = personsName.value +" Juice and Coffee is available. Please make payment"
    console.log(breakFastFood3);
    breakFastFood3 --;
    console.log(breakFastFood3);
}
else if (plate4.checked == true && breakFastFood4 > 0){
document.getElementById('first').innerHTML = personsName.value +" Bread, Sausage and Tea is available. Please make payment"
console.log(breakFastFood4);
breakFastFood4 --;
console.log(breakFastFood4);
}
else if(breakFastFood1 ==0 && breakFastFood2==0 && breakFastFood3 ==0 && breakFastFood4 ==0 ){
  document.getElementById('first').innerHTML = personsName.value +" There is no food available"
}

else{
 document.getElementById('first').innerHTML = personsName.value +" Food not available. Please make another choice"
}
}
document.getElementById('btn1').onclick = order1;
function order2(){
   if(food1.checked ==true && platesFood1 >0){
        document.getElementById('second').innerHTML = yourName.value +" Chapati Ndengu is available. Please make payment";
        console.log(platesFood1);
        platesFood1 --;
        console.log(platesFood1);
   }
   else if (food2.checked == true && platesFood2 >0){
        document.getElementById('second').innerHTML = yourName.value +" Ugali Nyama is available. Please make payment"
        console.log(platesFood2);
        platesFood2 --;
        console.log(platesFood2);
   }
   else if (food3.checked == true && platesFood3 > 0){
        document.getElementById('second').innerHTML = yourName.value +" Rice Beans is available. Please make payment"
        console.log(platesFood3);
        platesFood3 --;
        console.log(platesFood3);
   }
   else if (food4.checked == true && platesFood4 > 0){
    document.getElementById('second').innerHTML = yourName.value +" Chapati Beans is available. Please make payment"
    console.log(platesFood4);
    platesFood4 --;
    console.log(platesFood4);
}
else if (food5.checked == true && platesFood5 > 0){
  document.getElementById('second').innerHTML = yourName.value +" Ugali Veg is available. Please make payment"
  console.log(platesFood5);
  platesFood5 --;
  console.log(platesFood5);
}
else if (food6.checked == true && platesFood6 > 0){
  document.getElementById('second').innerHTML = yourName.value +" Pilau is available. Please make payment"
  console.log(platesFood6);
  platesFood6 --;
  console.log(platesFood6);
}
   else if(platesFood1 ==0 && platesFood2==0 && platesFood3 ==0 && platesFood4 ==0 && platesFood5 ==0 && platesFood6 ==0){
     document.getElementById('second').innerHTML = yourName.value +" There is no food available"
   }

else{
    document.getElementById('second').innerHTML = yourName.value +" Food not available. Please make another choice"
}

}
document.getElementById('btn2').onclick = order2;
