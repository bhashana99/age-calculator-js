
let userInput = document.getElementById("date");
// disable future dates
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");


function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;  //January = 0
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 -m1 ;
    }

    if(d2 >= d1){
        d3 = d2 -d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 -d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
   // console.log(y3,m3,d3);

   let resultText = "";


   if(y3 == 0 && m3>0){
    resultText = `You are <span>${m3}</span> months and <span>${d3}</span> days old.`;
   }else if(y3 == 0 && m3 == 0 && d3 > 0){
    resultText = ` You are <span>${d3}</span> days old.`;
   }else if(m3 == 0 ){
    resultText = ` You are <span>${y3}</span> years and <span>${d3}</span> days old.`;
   }else if(d3 == 0){
    resultText = ` You are <span>${y3}</span> years and <span>${m3}</span> months old.`;
   }
   else{
    resultText = `You are <span>${y3}</span> years and <span>${m3}</span> months and <span>${d3}</span> days old.`
   }

   result.innerHTML = resultText;
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}