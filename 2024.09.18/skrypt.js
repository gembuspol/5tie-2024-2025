//tworzenie obiektu
const osoba={
    imie: "Kamil",
    nazwisko: "Kubera",
    wiek: "20",
    wypiszWszystko: function() {
        return this.imie+" "+this.nazwisko+" "+this.wiek;
    }
}
function funkcja1(){
    document.getElementById("dane1").innerHTML=osoba.wypiszWszystko();
}
//tworzenie obiektów z wykorzystaniem konstruktora
function Samochod(marka,model, rocznik,kolor,silnik){
    this.marka=marka;
    this.model=model;
    this.rocznik=rocznik;
    this.kolor=kolor;
    this.silnik=silnik;
    this.ilosckol=4;
}
//tworzenie obiektów
const Fabia = new Samochod("Skoda","Fabia","2015","niebieski","1.0 MPI");
const Punto = new Samochod("Fiat", "Punto", "2010", "zielony","1.2");

//wywołanie funkcji i wykorzystanie utworzonych obiektów

function funkcja2(){
    document.getElementById("dane2").innerHTML="Utworzony obiekt fabia ma markę: "+Fabia.marka+" i jest z rocznika: "+Fabia.rocznik;
}
function funkcja3(){
    document.getElementById("dane2").innerHTML="Utworzony obiekt punto ma markę: "+Punto.marka+" i jest z rocznika: "+Punto.rocznik;
}