function saludar(){
    var nombre=document.getElementById("name").value;
    var saludo=["Buenos días","Buenas tardes","Buenas noches","Hola"];
    var mensaje;
    var text;
    var veces= document.getElementById("nveces").value;
    var i;//contador
    for(i=0;i<veces;i++){
        mensaje=`${saludo[i]} ${nombre}`;
        text+=mensaje+ "<br>";
        document.getElementById("demo").innerHTML=text;
    }
}