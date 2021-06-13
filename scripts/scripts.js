
var cantidad = 0;
var salario = 0;
var extra = 0;

function Calcular(){
 cantidad = document.getElementById('idCantidad').value;
 salario = cantidad * 820000;
 //console.log(cantidad);

if(salario>=1640000 && salario <=3280000){
document.getElementById('salario').value = cantidad * 820000;
document.getElementById('salarioextra').value = salario * 0.15; 
document.getElementById('total').value =salario - (salario * 0.15);
document.getElementById('Mensaje').innerHTML = "Su descuento es de 15%";
console.log(cantidad);

}
if(salario>=3280000 && salario <=6560000){
    document.getElementById('salario').value = cantidad * 820000;
    document.getElementById('salarioextra').value = salario * 0.25; 
    document.getElementById('total').value =salario - (salario * 0.25);
    document.getElementById('Mensaje').innerHTML = "Su descuento es de 25%";
    console.log(cantidad);
    
    }

    if(salario>=6560000 && salario <=9840000){
        document.getElementById('salario').value = cantidad * 820000;
        document.getElementById('salarioextra').value = salario * 0.35; 
        document.getElementById('total').value =salario - (salario * 0.35);
        document.getElementById('Mensaje').innerHTML = "Su descuento es de 35%";
        console.log(cantidad);
        
        }

        if(salario>=9840000){
            document.getElementById('salario').value = cantidad * 820000;
            document.getElementById('salarioextra').value = salario * 0.0; 
            document.getElementById('total').value =salario - (salario * 0.0);
            document.getElementById('Mensaje').innerHTML = "No tiene descuento";
            console.log(cantidad);
            
            }
}



