var expEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
var expNumero = /^[0-9]{9}/

$(document).ready(function(){
  $("#btnEnviar").click(function(){
    var usuario = $("#txtUsuario").val();
    var nombre = $("#txtNombre").val();
    var celular = $("#txtCelular").val();
    var correo = $("#txtCorreo").val();
    var contraseña = $("#txtContraseña").val();
    var rcontraseña = $("#txtRcontraseña").val();

    if(usuario == ""){
      $("#mensaje1").fadeIn();
      return false;
    }else{
        $("#mensaje1").fadeOut();
        if(nombre == "" ){
          $("#mensaje2").fadeIn();
          return false;
        }else{
          $("#mensaje2").fadeOut();
          if(celular == "" || !expNumero.test(celular)){
            $("#mensaje3").fadeIn();
            return false;
          }else{
            $("#mensaje3").fadeOut();
            if(correo == "" || !expEmail.test(correo)){
              $("#mensaje4").fadeIn();
              return false;
            }else{
              $("#mensaje4").fadeOut();
              if(contraseña == ""){
                $("#mensaje5").fadeIn();
                return false;
              }else{
                $("#mensaje5").fadeOut();
                if(rcontraseña == "" || rcontraseña !== contraseña){
                  $("#mensaje6").fadeIn();
                  return false;
                }
              }
            }
          }
        }
    }

  });
});