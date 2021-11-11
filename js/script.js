
var rest01Value;
var val01Value;

var rest02Value;
var val02Value;

var rest03Value;
var val03Value;

var gorjeta01;
var gorjeta02;
var gorjeta03;

function inputs(){

rest01Value = document.CalcRest.rest01.value;
val01Value = document.CalcRest.val01.value;

rest02Value = document.CalcRest.rest02.value;
val02Value = document.CalcRest.val02.value;

rest03Value = document.CalcRest.rest03.value;
val03Value = document.CalcRest.val03.value;



}

function calcGorjeta(){

    inputs();

    const quinze = 0.15;
    const dez = 0.1;
    const vinte = 0.2;
    
                if(val01Value >200){
                    gorjeta01 = val01Value * dez;
                }
    
                else if(val01Value < 50){
                    gorjeta01 = val01Value * vinte;
                }
    
                else if(val01Value >= 50 &&  val01Value <= 200){
                    gorjeta01 = val01Value * quinze;
                }
    
    
    
    
                if(val02Value >200){
                    gorjeta02 = val02Value * dez;
                }
    
                else if(val02Value < 50){
                    gorjeta02 = val02Value * vinte;
                }
    
                else if(val02Value >= 50 &&  val02Value <= 200){
                    gorjeta02 = val02Value * quinze;
                }
    
    
    
    
                if(val03Value >200){
                    gorjeta03 = val03Value * dez
                }
    
                else if(val03Value < 50){
                    gorjeta03 = val03Value * vinte
                }
    
                else if(val03Value >= 50 &&  val03Value <= 200){
                    gorjeta03 = val03Value * quinze
                }

            }



function gorjeta(){
                
    calcGorjeta();
               
    
    alert(`Valor da gorjeta restaurante ${rest01Value} (R$): ${gorjeta01.toFixed(2)}\nValor da gorjeta restaurante ${rest02Value} (R$): ${gorjeta02.toFixed(2)}\nValor da gorjeta restaurante ${rest03Value} (R$): ${gorjeta03.toFixed(2)}`);

}
   


function conta(){

 
    calcGorjeta();

    var valorTotal01 =  (parseFloat(val01Value)  + parseFloat(gorjeta01));
    var valorTotal02 = (parseFloat(val02Value) +parseFloat(gorjeta02));
    var valorTotal03 = (parseFloat(val03Value) + parseFloat(gorjeta03));


    const restaurants = [rest01Value, rest02Value, rest03Value];

    const values = [val01Value, val02Value, val03Value];

    const gorjetas = [gorjeta01, gorjeta02, gorjeta03];

    const valorTotal = [valorTotal01, valorTotal02, valorTotal03];

    


     for(let final=0; final<3; final++){              //laco para mostrar o resultado final

      alert(`Restaurante: ${restaurants[final]} \nValor (R$): ${values[final]}\nGorjeta (R$): ${gorjetas[final].toFixed(2)}\nValor final (R$): ${valorTotal[final].toFixed(2)}`);

     }
   
               //dar um clear nos inputs
               document.CalcRest.rest01.value= "";
               document.CalcRest.val01.value= "";
               document.CalcRest.rest02.value= "";
               document.CalcRest.val02.value= "";
               document.CalcRest.rest03.value= "";
               document.CalcRest.val03.value= "";

            
}


    

