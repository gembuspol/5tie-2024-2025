function funkcja1(){
    //wylosowanie liczby z przedziału 0 - 10
    let liczba =Math.floor(Math.random()*10);
    switch(liczba){
        case 0:
            document.getElementById("wynik1").innerHTML="Wylosowano 0";
            //słowo kluczowe break przerywa działanie pętli
            break;
        case 1:
            document.getElementById("wynik1").innerHTML="Wylosowano 1";
            //słowo kluczowe break przerywa działanie pętli
            break;
        case 2:
            document.getElementById("wynik1").innerHTML="Wylosowano 2";
            //słowo kluczowe break przerywa działanie pętli
            break;
        default:
            document.getElementById("wynik1").innerHTML="Wylosowano liczbę większą od 2";
    }
}
function funkcja2(){
        //wylosowanie liczby z przedziału 0 - 10
        let liczba =Math.floor(Math.random()*10);
        switch(liczba){
            case 0:
            case 1:
            case 2:
                document.getElementById("wynik1").innerHTML="Wylosowano liczbę z przedziału od 0 do 2";
                //słowo kluczowe break przerywa działanie pętli
                break;
            case 3:
            case 4:
                document.getElementById("wynik1").innerHTML="Wylosowano 3 lub 4";
                //słowo kluczowe break przerywa działanie pętli
                break;
            case 5:
                document.getElementById("wynik1").innerHTML="Wylosowano 5";
                //słowo kluczowe break przerywa działanie pętli
                break;
            default:
                document.getElementById("wynik1").innerHTML="Wylosowano liczbę większą od 5d";
        }
}