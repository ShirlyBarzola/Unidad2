function seriesPares(){
    var serie="Resultado: ";
    var i=2;
    while(i<=100){
        serie+=`${i} - `;
        document.getElementById("resultado").innerHTML=serie;
        i=i+2;
    }
}
function serieImpar(){
    var serie="Resultado: ";
    var i=1;
    while(i<=12){
        serie+=`${i} - `;
        document.getElementById("resultado").innerHTML=serie;
        i=i+2;
    }
}