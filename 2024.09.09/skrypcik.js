function funkcja1(){
    // wstrzykiwanie kodu do podanego elementu (wykorzystani id tego elementu) zamiast istniejącego kodu
    document.getElementById("nag").innerHTML="To jest nowy tekst";
}
function funkcja2(){
    // wypisanie działania funkcji jaka tekst na całą strone, zastąpi to wszystko co istniało wcześniej
    document.write("Kamil nie może żyć bez Fortnite");
}
function funkcja3(){
    // wypisanie komunikatu jako alert - wyskakujące okienko
    window.alert("Danila będzie musiał to nadrobić");
}
function funkcja4(){
    //wypisanie wartości do logów strony - używane do tego aby sprawdzić jak coś działa
    console.log("została wykonana funkcja dla logów");
}
function funkcja5(){
    //działanie aby wydrukować dane - wydrukować stronę
    window.print();
}
//deklaracja funkcji która używa zmiennych
//zmienne deklarujemy w javaScript z wykorzystaniem operator "let" albo "var"
function funkcja6(a){
    let kwadrat=a*a;
    window.alert(kwadrat);
}