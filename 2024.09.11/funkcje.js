let zmienna1=10;
let imie="Kamil";
function funkcja1(){
    console.log(zmienna1+imie);
}
// deklaracja stałych - zmienna, która ma ustawioną wartość ale nie można jej zmienić. używamy do tego słowa kluczowego "const"
// Stałe piszemy dużymi literami
const PI=3.14;
//wypisanie stałej
function funkcja2() {
    window.alert("Wartość stałej PI to: "+PI);
}
//próba zmiany stałej
function funkcja3() {
    PI=10; //tutaj pojawia się błąd przypisania
    document.getElementById("dane1").innerHTML="Zmiana warości zmiennej PI: "+PI;
}
// Operatory
// Operator 	Example 	Same As
//  = 	        x = y       x = y
//  += 	        x += y 	    x = x + y
//  -= 	        x -= y 	    x = x - y
//  *= 	        x *= y 	    x = x * y
//  /= 	        x /= y 	    x = x / y
//  %= 	        x %= y 	    x = x % y
//  **= 	x **= y 	    x = x ** y

//funkcja zwracająca wartość
function funkcja4(przyprostokatna,przeciwprostokatna) {
    //obliczanie sinusa dla podanych wartośc
    let sinus=przyprostokatna/przeciwprostokatna;
    return sinus;
}
function funkcja5(){
    let a=5.67;
    let b=12.45;
    let wynik=funkcja4(a,b);
    document.getElementById("dane1").innerHTML=wynik;
}