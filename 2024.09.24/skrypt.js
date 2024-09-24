function funkcja1(){
    // deklaracja tablicy
    const tablica1=["Jeep","Skoda","BMW","AUDI"];
    document.getElementById("wynik1").innerHTML=tablica1;
    // tablicę można również zdefiniować za pomocą obieku Array
    const tablica2=new Array("Pojazd1","Pojazd2","Pojazd3");
    document.getElementById("wynik2").innerHTML=tablica2;
    //wypisanie pojedynczych elementów z tablicy z wykorzystanie indksu (liczymy od 0)
    document.getElementById("wynik3").innerHTML=tablica1[0];
    document.getElementById("wynik4").innerHTML=tablica1[1];
    //domyślną funkcją wywołanai tablicy jest funkcja toString - zmienia tablicę na tekst
    //tablica1.toString();
}
//funkcje dla tablic
function funkcja2(){
    const tablica1=["Jeep","Skoda","BMW","AUDI","Pojazd1","Pojazd2"];
    const tablica2=new Array("Pojazd1","Pojazd2","Pojazd3");
    //wyświetlenie długości tablicy (ilosć elementów)
    document.getElementById("wynik1").innerHTML=tablica1.length;
    //funkcja at() zwraca podany w paramtrze element tablicy - to samo jak wykorzystanie []
    document.getElementById("wynik2").innerHTML=tablica1.at(2);
    //połączenie elementów tablicy za pomocą join()
    document.getElementById("wynik3").innerHTML=tablica1.join(" % ");
    
}
function funkcja3(){
    const tablica1=["Jeep","Skoda","BMW","AUDI","Pojazd1","Pojazd2"];
    //usuwanie/zwracanie ostatniego elemtu tablicy - pop()
    let tablica3=tablica1.pop();
    document.getElementById("wynik1").innerHTML=tablica1;
    document.getElementById("wynik2").innerHTML=tablica3;
    //dodanie nowego elementu na koniec - push()
    tablica1.push("Opel")
    document.getElementById("wynik3").innerHTML=tablica1;
    //usuwanie pierwszego elementu - shift()
    tablica1.shift()
    document.getElementById("wynik4").innerHTML=tablica1;
}
function funkcja4(){
    const tablica1=["Jeep","Skoda","BMW","AUDI","Pojazd1","Pojazd2"];
    //dodanie elemntu na pierwszą pozycję unshift()
    document.getElementById("wynik1").innerHTML=tablica1;
    tablica1.unshift("Chrysler")
    document.getElementById("wynik2").innerHTML=tablica1;
    //sortowanie elementów tablicy sort(), rerse() (odwrotna kolejność)
    tablica1.sort();
    document.getElementById("wynik3").innerHTML=tablica1;
    //poszukiwanie elementów find()
    document.getElementById("wynik4").innerHTML=tablica1.find("BMW");
}