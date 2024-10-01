function funkcja1(){
    // wylosowanie liczby z zakresu od 0 do 1
    let zmienna1=Math.random();
    document.getElementById("wynik1").innerHTML=zmienna1;
    //losowanie liczby z przedziału od 0 do 10
    zmienna1=Math.random()*10;
    document.getElementById("wynik2").innerHTML=zmienna1;
    // losowanie z liczby z przedziału od 5 do 10
    zmienna1=Math.random()*5+5;
    document.getElementById("wynik3").innerHTML=zmienna1;
}
function funkcja2(){
    //wylosowanie liczby całkowitej z przedziału od 0 do 10
    let zmienna=Math.random()*11; 
    let calkowita=Math.floor(zmienna);
    document.getElementById("wynik1").innerHTML=calkowita;
}
function funkcja3(){
    //losowanie liczby całkowitej z przedziału 100 do 199
    let zmienna=Math.random()*100+100;
    let calkowita=Math.floor(zmienna);
    document.getElementById("wynik1").innerHTML=calkowita;
}