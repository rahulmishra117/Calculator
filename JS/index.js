var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");

var operand1=0;
var operand2=null;
var operator=null;

function isValue(value)
{
    return value== '+' || value=='-' || value=='*' || value=='/' ;
}

for(var i=0;i<buttons.length;i++){

    buttons[i].addEventListener('click',function(){
        
        var value=this.getAttribute('data-value');
        console.log(value);
        var text=display.textContent.trim();
        if (isValue(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        } else if (value == "AC"){
            display.textContent = "";
        } 
           
         else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            console.log(result);
            if (result) {
                display.textContent = result;
                // console.log(display);
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            display.textContent += value;
        }
    });
}

