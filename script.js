// Greeting

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.innerHTML = "🌞 Good Morning!";
}
else if (hour < 18) {
    greeting.innerHTML = "🌞 Good Afternoon!";
}
else {
    greeting.innerHTML = "🌙 Good Evening!";
}

// Hero Button

const btn = document.getElementById("colorBtn");

btn.onclick = function () {
    btn.style.background = "linear-gradient(to right,#2563eb,#9333ea)";
};

// Calculator

function calculate(operator){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = document.getElementById("result");

    if(document.getElementById("num1").value==="" ||
       document.getElementById("num2").value===""){

        result.innerHTML="⚠ Please enter both numbers";
        result.style.color="red";
        return;
    }

    let answer;

    switch(operator){

        case "+":
            answer=num1+num2;
            break;

        case "-":
            answer=num1-num2;
            break;

        case "*":
            answer=num1*num2;
            break;

        case "/":
            if(num2==0){
                result.innerHTML="Cannot divide by zero";
                result.style.color="red";
                return;
            }
            answer=num1/num2;
            break;
    }

    result.innerHTML="✅ Result = "+answer;
    result.style.color="#2563eb";
}