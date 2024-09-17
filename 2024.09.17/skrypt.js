const osoba ={
    imie: "Kamil",
    nazwisko: "Kilon",
    wiek: 19,
    wzrost: 215
};
function funkcja1(){
    document.getElementById("dane1").innerHTML=osoba.wiek;
    // zmiana wartośc w obiekcie
    osoba.wiek=24;
    document.getElementById("dane2").innerHTML=osoba.wiek;
    //usuwanie włąsciwości z obiektu
    delete osoba.wiek;
    document.getElementById("dane3").innerHTML=osoba.wiek;
}
// stworzenie obiektu w obiekcie
const osoba2 = {
    nazwa: "Igor Fujak",
    wiek: 50,
    pojazd: {
        marka: "Volkswagen",
        model: "Polo"
    }
}
function funkcja2(){
    document.getElementById("dane1").innerHTML=osoba2.pojazd.marka;
    document.getElementById("dane2").innerHTML=osoba2.pojazd["marka"];
    document.getElementById("dane3").innerHTML=osoba2["pojazd"]["marka"];
}
//funkcje w obiekcie
osoba3 ={
    imie: "Tomasz",
    nazwisko: "Koza",
    wiek: 19,
    imieNazwisko: function () {
        return this.imie + " " + this.nazwisko;
    }
};
function funkcja3(){
    document.getElementById("dane1").innerHTML=osoba3.imieNazwisko();
}
//wyświetlanie obiektów
function funkcja4(){
    //wyświetlenei za pomocą metody klasy
    document.getElementById("dane1").innerHTML=osoba3.imieNazwisko();
    //wyświetlenie za pomocą pętli
    let text="";
    for (let x in osoba3){
         text+=osoba3[x] + " ";
    }
    document.getElementById("dane2").innerHTML=text;
    //za pomocą metody values
    const tablica = Object.values(osoba3);
    document.getElementById("dane3").innerHTML=tablica;
}