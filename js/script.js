
var rest01Value;
var val01Value;

var rest02Value;
var val02Value;

var rest03Value;
var val03Value;

var gorjeta01;
var gorjeta02;
var gorjeta03;

function calculo(){

rest01Value = document.CalcRest.rest01.value;
val01Value = document.CalcRest.val01.value;

rest02Value = document.CalcRest.rest02.value;
val02Value = document.CalcRest.val02.value;

rest03Value = document.CalcRest.rest03.value;
val03Value = document.CalcRest.val03.value;



}

function calcGorjeta(){

    calculo();

    
                if(val01Value >200){
                    gorjeta01 = val01Value * .001;
                }
    
                else if(val01Value < 50){
                    gorjeta01 = val01Value * .002;
                }
    
                else if(val01Value >= 50 &&  val01Value <= 200){
                    gorjeta01 = val01Value * .015
                }
    
    
    
    
                if(val02Value >200){
                    gorjeta02 = val02Value * .001;
                }
    
                else if(val02Value < 50){
                    gorjeta02 = val02Value * .002;
                }
    
                else if(val02Value >= 50 &&  val02Value <= 200){
                    gorjeta02 = val02Value * .015
                }
    
    
    
    
                if(val03Value >200){
                    gorjeta03 = val03Value * .001;
                }
    
                else if(val03Value < 50){
                    gorjeta03 = val03Value * .002;
                }
    
                else if(val03Value >= 50 &&  val03Value <= 200){
                    gorjeta03 = val03Value * .015
                }
            }

function calculoGorjeta(){
                
    calcGorjeta();
               
    
    alert(`Valor da gorjeta restaurante ${rest01Value}: ${gorjeta01}\nValor da gorjeta restaurante ${rest02Value}:${gorjeta02}\nValor da gorjeta restaurante ${rest03Value}: ${gorjeta03}`);

    }
   


function conta(){

 
    calcGorjeta();

    let valorTotal01 = val01Value + gorjeta01;
    let valorTotal02 = val02Value + gorjeta02;
    let valorTotal03 = val03Value + gorjeta03;


    const restaurants = [rest01Value, rest02Value, rest03Value];

    const values = [val01Value, val02Value, val03Value];

    const gorjetas = [gorjeta01, gorjeta02, gorjeta03];

    const valorTotal = [valorTotal01, valorTotal02, valorTotal03];


     for(let final=0; final<3; final++){              //laco para mostrar o resultado final

      alert(`Restaurante: ${restaurants[final]} \nValor: ${values[final]}\nGorjeta ${gorjetas[final]}\nValor final ${valorTotal[final]}`);

     }
   
/*
               //dar um clear nos inputs
               document.CalcRest.rest01.value= "";
               document.CalcRest.val01.value= "";
               document.CalcRest.rest02.value= "";
               document.CalcRest.val02.value= "";
               document.CalcRest.rest03.value= "";
               document.CalcRest.val03.value= "";

               */
}


    

