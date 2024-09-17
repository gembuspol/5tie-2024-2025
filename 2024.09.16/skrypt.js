function typy(){
    let zmienna1=12;
    let zmienna2=342.654;
    let zmienna3="To jest tekst";
    let zmienna4= zmienna1==zmienna2;
    let zmienna5=zmienna3+" druga czesc";
    let zmienna6="Teks i liczba: "+zmienna1;
    let zmienna7;
    let zmienna8="";
    const PI=3.14;
    let zmienna9=null;

    document.getElementById("typyDanych").innerHTML="zmienna1 ma typ "+typeof(zmienna1)+"<br>"+"zmienna2 ma typ "+typeof(zmienna2)+"<br>"+"zmienna3 ma typ "+typeof(zmienna3)+"<br>"+"zmienna4 ma typ "+typeof(zmienna4)+"<br>"+"zmienna5 ma typ "+typeof(zmienna5)+"<br>"+"zmienna6 ma typ "+typeof(zmienna6)+"<br>"+"zmienna7 ma typ "+typeof(zmienna7)+"<br>"+"zmienna8 ma typ "+typeof(zmienna8)+"<br>"+"zmienna9 ma typ "+typeof(zmienna9)+"<br>"+"PI ma typ "+typeof(PI)+"<br>";
}
function obiekt(){
    const samochod={
        marka:"Honda",
        model: "Civic",
        rocznik: "2005",
        pojemonoscSilnik: "1,7"
    }
    document.getElementById("obiekt").innerHTML= samochod;
    document.getElementById("marka").innerHTML= samochod.marka;
}