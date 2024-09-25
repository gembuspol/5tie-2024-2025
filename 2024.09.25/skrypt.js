function funkcja1(){
    // utworzenie obiektu daty - pobranie aktualnej daty
    const data=new Date();
    document.getElementById("wynik1").innerHTML=data;
    //utworzenie daty
    const data2=new Date("2024-09-24");
    document.getElementById("wynik2").innerHTML=data2;
    //utworzenie daty raze z godziną
    const data3=new Date(2024,9,24,11,36);
    document.getElementById("wynik3").innerHTML=data3;
    //utworzenie daty na podstawie ilości milisekund jakie upłynęły do 1 stycznia 1970 roku
    const data4=new Date(100000000000000);
    document.getElementById("wynik4").innerHTML=data4;
}
function funkcja2(){
    //obiekt Date() ma zaimplementowaną metodę toString(), która pozwala wypisać datę do zmiennej tekstowej
    //można użyć też funkcji toUTCString(), toISOString()
    //wykorzystanie toISOString()
    const data=new Date();
    document.getElementById("wynik1").innerHTML=data.toISOString();
    //za pomocą funkcji możemy wybrać fragment daty np. miesiąc rok, godzina itp.

}
function funkcja3(){
     //za pomocą funkcji możemy wybrać fragment daty np. miesiąc rok, godzina itp.
     const data=new Date();
     //wypisanie miesiąca
     document.getElementById("wynik1").innerHTML=data.getMonth();
     //wypisanie godzin
     document.getElementById("wynik2").innerHTML=data.getHours();
     //wypisanie dnia
     document.getElementById("wynik3").innerHTML=data.getDate();
     //wypisanie dnia tygodnia - zwraca liczby od 0 do 6
     document.getElementById("wynik4").innerHTML=data.getDay();
}
function funkcja4(){
    //ustawianie czasu i daty można wykorzystać np do ustalenia co będzie za 10 dni, funkcje możemy ustalić w zależności od dnia, miesiaca, roku, godziny i innych elementów daty
    //ustalenie jaka będzie data i godzina za 123 godziny
    const data=new Date();
    data.setHours(123);
    document.getElementById("wynik1").innerHTML=data;
}