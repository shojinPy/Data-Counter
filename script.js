const selection1 = document.getElementById('box1Value');
var value1 = 0;

const selection2 = document.getElementById('box2Value');
var value2 = 0;

const selection3 = document.getElementById('box3Value');
var value3 = 0;

// Buttons //
const minusSelection1 = document.getElementById('minusBox1');
const addSelection1 = document.getElementById('addBox1');

const minusSelection2 = document.getElementById('minusBox2');
const addSelection2 = document.getElementById('addBox2');

const minusSelection3 = document.getElementById('minusBox3');
const addSelection3 = document.getElementById('addBox3');

var totalSelection = document.getElementById('totalValue');
var total = 0;

const resetSelection = document.getElementById('resetBtn')

// Button functions //
addSelection1.onclick = function(){
     value1 += 1;
     total += 1;
     selection1.innerHTML = value1;
     totalSelection.innerHTML = total;
}
minusSelection1.onclick = function(){
     if(value1 >= 1 && total >= 1){
          value1 -= 1;
          total -= 1;
          selection1.innerHTML = value1;
          totalSelection.innerHTML = total;
     }
}

addSelection2.onclick = function(){
     value2 += 1;
     total += 1;
     selection2.innerHTML = value2;
     totalSelection.innerHTML = total;
}
minusSelection2.onclick = function(){
     if(value2 >= 1 && total >= 1){
          value2 -= 1;
          total -= 1;
          selection2.innerHTML = value2;
          totalSelection.innerHTML = total;
     }
}

addSelection3.onclick = function(){
     value3 += 1;
     total += 1;
     selection3.innerHTML = value3;
     totalSelection.innerHTML = total;
}
minusSelection3.onclick = function(){
     if(value3 >= 1 && total >= 1){
          value3 -= 1;
          total -= 1;
          selection3.innerHTML = value3;
          totalSelection.innerHTML = total;
     }
}


resetSelection.onclick = function (){
     let confirm = window.confirm("Are you sure you want to reset all of the data?")
     if(confirm===true){
          value1 = 0;
          value2 = 0;
          value3 = 0;
          total = 0;
          selection1.innerHTML = value1;
          selection2.innerHTML = value2;
          selection3.innerHTML = value3;
          totalSelection.innerHTML = total;
     }
     else{
          alert("Data reset has been cancelled.")
     }
}