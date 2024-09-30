function funkcja1(){
    // liczba PI
    let liczba1=Math.PI
    document.getElementById("wynik1").innerHTML=liczba1;
    // zaokrąglenie liczby do całkowitych
    let liczba2=Math.round(liczba1);
    document.getElementById("wynik2").innerHTML=liczba2;
    //zaokrąglenie do części setnych - należy napisać funkcję
    let liczba3=Math.round(liczba1*100);
    let liczba4=liczba3/100;
    document.getElementById("wynik3").innerHTML=liczba4;
}
function funkcja2(){
    // zaokrąglenie w górę Math.ceil()
    let liczba1=4.3234542;
    document.getElementById("wynik1").innerHTML=Math.ceil(liczba1);
    // zaokrąglenie w dół Math.floor()
    document.getElementById("wynik2").innerHTML=Math.floor(liczba1);
    // wartość bezwględna Math.sign()
    let liczba2=-43.12;
    document.getElementById("wynik3").innerHTML=Math.sign(liczba2);
}
function funkcja3(){
    // potęgowanie - Math.pow()
    let liczba1=Math.pow(8,12);
    document.getElementById("wynik1").innerHTML=liczba1;
    // pierwiastkowanie - Math.sqrt(), pierwiastek drugirgo stopnia
    let liczba2=144;
    document.getElementById("wynik2").innerHTML=Math.sqrt(liczba2);
    // największa wartość Math.max(), najmniejsza wartość Math.min()
    let max=Math.max(12,423,7467,121,1,534,123);
    document.getElementById("wynik3").innerHTML=max;
}