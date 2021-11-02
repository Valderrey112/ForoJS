"use strict";

let mensaje = "";

function mesTexto(mes){

  var mes;
  var salir=true;
  while(salir==true){
    switch (mes){
      case 0: salir=false;
        return("Enero");
        break;
      case 1: salir=false;
        return("Febero");
        break;
      case 2: salir=false;
        return("Marzo");
        break;
      case 3: salir=false;
        return("Abril");
        break;
      case 4: salir=false;
        return("Mayo");
        break;
      case 5: salir=false;
        return("Junio");
        break;
      case 6: salir=false;
        return("Julio");
        break;
      case 7: salir=false;
        return("Agosto");
        break;
      case 8: salir=false;
        return("Septiembre");
        break;
      case 9: salir=false;
        return("Octubre");
        break;
      case 10: salir=false;
        return("Noviembre");
        break;
      case 11: salir=false;
        return("Diciembre");
        break;
      default: return("Nº incorrecto");
        break;
    }
  }

}

class Message{
  constructor(auth, text) {
    this.text = text;
    this.auth = auth;
    this.date = new Date();
    this.fecha = this.date.getDay() + " de " + mesTexto(this.date.getMonth()) + " del " + this.date.getFullYear() + " - " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds();
  }
}

let mensajes =[
  new Message("admin", "ForoJS recién creado"),
  new Message("user01", "Pues muy bien"),
  new Message("admin", "Y a ti, ¿Quién te ha dado vela en este entierro @user01?"),
  new Message("user01", "Me parece una sin vergüenzada que el administrador de un foro tenga que sacar a pasear ese tipo de modales tan obscenos")
];

function showMessages(){
  mensaje = "";
  for(var i = 0; i < mensajes.length; i++) {
    mensaje += "<p>" + mensajes[i].auth + " ----- " + mensajes[i].text + " ( " + mensajes[i].fecha + " ) </p>";
  }
  document.getElementById("mensajes").innerHTML= mensaje;
}

showMessages();

function addMessage(){
  let user = document.getElementById("author").value;
  let text = document.getElementById("message").value;
  mensajes.push(new Message(user, text));

  document.getElementById("author").value = "";
  document.getElementById("message").value = "";

  showMessages();
}

