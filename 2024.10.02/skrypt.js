function funkcja1(){
    // funkcja warunkwa składa się ze słowa kluczowego if oraz z warunków, nastepnie podajemy instrukcje do wykonania. Można użyć słowa kluczowego else jeżeli chcemy wykorzystać opcję w przeciwnym wypadku
    let dane=30;
    if(dane>5){
        document.getElementById("wynik1").innerHTML="Liczba "+dane+" większa od 5";
    }else{
        document.getElementById("wynik1").innerHTML="Liczba "+dane+" jest mniejsza od 5";
    }
}
function potegaPlus(podstawa,potega){
    let wynik=Math.pow(podstawa,potega);
    let wynik1=0;
    if(wynik%2==0){
        wynik1=1;
    }
    return wynik1;
}
function funkcja2(){
    let liczba1=8;
    let liczba2=11;
    let obliczenia=potegaPlus(liczba1,liczba2);
    if(obliczenia){
        document.getElementById("wynik1").innerHTML="potega liczby "+liczba1+ " podniesionej do potęgi "+liczba2+" jest parzysta";
    }else{
        document.getElementById("wynik1").innerHTML="potega liczby "+liczba1+ " podniesionej do potęgi "+liczba2+" jest nieparzysta";
    }

}