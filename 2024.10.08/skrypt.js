//stworzymy funkcje która bedzie przyjmowała liczbę całkowitą, a następnie sprawdzi czy jest podzielna przez 2 - wtedy do zwracanej wartości dodamy 1, jeżeli jest podzielna przez 3 do do zwracanej wartości dodamy 2. Wartość zwaraca na początku będzie równa 0. Dlatego otrzymamy 4 możliwe wyniki do zwrócenia:
// funkcja zwraca 0 - liczba nie jest podzielna przez 2 i przez 3
//funkcja zwraca 1 - liczba jest podzielna tylko przez 2
//funkcja zwraca 2 - liczba jest podzielna tylko przez 3
//funkcja zwraca 3 - liczba jest podzielna przez 2 i 3
function podzielna(liczba){
    let wynik=0;
    if(liczba%2==0){
        wynik=wynik+1;
    }
    if(liczba%3==0){
        wynik=wynik+2;
    }
    return wynik;
}
//funkcja która korzysta z pętli switch i zwraca odpowiedni komunikat o podzielności
function komunikat(liczba){
    let wynik=podzielna(liczba);
    let wynik1="";
    switch (wynik){
        case 0:
            wynik1="Liczba nie jest podzielna przez 2 lub 3";
            break;
        case 1:
            wynik1="Liczba jest podzielna przez 2";
            break;
        case 2:
            wynik1="Liczba jest podzielna przez 3";
            break;
        case 3:
            wynik1="Liczba jest podzielna przez 2 oraz przez 3";
            break;
        default:
            wynik1="Błędne dane";
    }
    return wynik1;
}
function funkcja1(){
    let liczba=Math.floor(Math.random()*90)+30;
    let info=komunikat(liczba);
    document.getElementById("wynik1").innerHTML="Wylosowana liczba to: "+liczba+". "+info;
}
function funkcja2(){
    let liczba=Math.floor(Math.random()*90)+30;
    let info=komunikat(liczba);
    document.getElementById("wynik2").innerHTML="Wylosowana liczba to: "+liczba+". "+info;
}
function funkcja3(){
    let liczba=Math.floor(Math.random()*90)+30;
    let info=komunikat(liczba);
    document.getElementById("wynik3").innerHTML="Wylosowana liczba to: "+liczba+". "+info;
}