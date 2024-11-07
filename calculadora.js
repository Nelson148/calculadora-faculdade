function ControleDeSelecao(){
    var dropdown = document.getElementById("operadores").options[document.getElementById("operadores").selectedIndex].value;			
    var placeText;
    var visibilidade; 
}		
function Limpar(id1, id2){
    document.getElementById(id1).value = "";
    document.getElementById(id2).value = "";
}	
function Calcular(id1, id2){
    var operador = document.getElementById("operadores").options[document.getElementById("operadores").selectedIndex].value;
    var num1 = document.getElementById(id1).value;
    var num2 = document.getElementById(id2).value;
    var resultado = new Number();
    switch(operador)
    {
        case "+":
        case "-":
        case "/":
        case "*":
            var StrExpressao = num1 + operador + num2;
         
            resultado = eval(StrExpressao); break;					
        case "raiz":
            resultado = "&radic;"+num1 + " = " + Math.sqrt(num1); break;					
        case "potencia":
            resultado = num1+"<sup>"+num2 +"</sup> = "+ Math.pow(num1, num2); break;					
        case "fatorial":
            resultado = calcular['fatorial'](); break;					
        case "fibonacci":
            resultado = calcular['fibonacci'](); break;					
        case "porcento":
            resultado = calcular['porcentagem'](); break;
        case "media":
            resultado = calcular['media'](); break;
        case "calc":
            resultado = eval(num1); break;
        default:
            break;				      
    }	   
    document.getElementById("saida").innerHTML = "Resultado: "+ resultado;
}