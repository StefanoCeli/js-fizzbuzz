//creo un ciclo dove la variabile i è uguale a 1 in modo che inizi con esso,poi faccio ciclare per 100 volte incrementando sempre di uno il valore.

for(var i = 1; i<=100; i++){
    
    //comincio a creare le condizioni per il ciclo,in questa parte dico di stampare a video "FizzBuzz" solo se i numeri saranno molteplici di 3 e di 5,posso fare questa verifica grazie al modulo % mettendo prima la negazione(perchè senza di essa il codice lo legge come valore false),in modo che se restituisce "0" stamperà a video 
    if(!(i % 3) && !(i % 5)){
      console.log("FizzBuzz")
        
      //qui la condizione vale solo per i molteplici di 3 e stamperò a video "Fizz"
    }else if(!(i % 3)){
        console.log("Fizz")
    }
    //qui la condizione vale solo per i molteplici di 5 e stamperò a video "Buzz"
    else if(!(i % 5)){
        console.log("Buzz")
        //qui invece dico che se non rispetta tutte le precedenti condizioni di stampre a video il valore di "i"
    }else{
        console.log(i)
    }
}