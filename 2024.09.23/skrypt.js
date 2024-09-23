// łączenie tekstów i wielkość znaków
function funkcja1(){
    let tekst1="Pawel ma dzisiaj robótkę. ";
    let tekst2="Nie ma go dzisiaj w szkole.";
    document.getElementById("wynik1").innerHTML=tekst1+tekst2.toUpperCase();

}
// ilość znaków tekscie
function funkcja2() {
    let tekst="Prawie cała klasa 5TIE uciekła z zajęć";
    let iloscZnakow=tekst.length;
    document.getElementById("wynik2").innerHTML=iloscZnakow;
}
// znaki specjalne w tekście
function funkcja3() {
    let tekst="Prawie cała klasa\' \\5TIE\n uciekła z zajęć";
    // \n = nowa linia
    document.getElementById("wynik3").innerHTML=tekst;
}
// wypisywanie fragmentu tekstu
function funkcja4() {
    let tekst="Prawie cała klasa 5TIE uciekła z zajęć";
    // wypisanie 8 znaku (liczymy od 0) funkcja charAt lub at
    let znak1=tekst.charAt(7);
    // wypisanie znaków od 10 do 15 funkcja slice
    let znaki2=tekst.slice(9,14);
    // usuwanie znaków biały (spacji itp.)
    let tekst2="     fadssafasf    ";
    let zanki3=tekst2.trim();
    document.getElementById("wynik4").innerHTML="znak 7: "+znak1+", znaki od 10 do 15: "+znaki2+", Wypisanie znaków bez spaci: "+zanki3;
    // dzielenie ciągu tekstowego - split np. chcemy zdanie podzielić na każde słowo osobno to w parametrze split wpisujemy spację - otrzymujemy jako wynik tablice słów
    let slowa=tekst.split(" ");
    document.getElementById("wynik3").innerHTML=slowa;
}