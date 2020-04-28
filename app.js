function registro(){
    var auth=firebase.auth();
    var email=document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log(email);
    console.log(password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
        verificar()
    });
    Swal.fire({
        icon: 'success',
        title: 'enviando correo',
        text: 'favor de verificar en su correo el enlace..',
        footer: 'mensaje de verificacion'
      })

    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
     
}

function ingreso(){
    
    var email2=document.getElementById('email2').value;
    var password2=document.getElementById('password2').value;

    if(email2 ===''|| password2 ===''){
        Swal.fire({
            icon: 'error',
            title: 'salio mal...',
            text: 'favor de llenar los campos !!!',
            footer: ''
          })

    }else{
        firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
          });
          
          location.href="index.html";
          
    }


    
}

// funcion de logout
function salir(){
    firebase.auth().signOut()
    .then(function(){
        console.log('ssaliendo....')
        location.href="index.html";
        
        
        
    })
    .catch(function(error){
        console.log(error)
    })
}


function verificar(){
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
        console.log('verificando...')
  
    }).catch(function(error) {
        console.log(error);
  
   });
}

  
function restablecer(){
    var auth = firebase.auth();
    var emailAddress = document.getElementById('email3').value;

    auth.sendPasswordResetEmail(emailAddress).then(function() {
        Swal.fire({
            icon: 'success',
            title: 'correo de restablecimiento',
            text: 'Se envio el correo de restablecimiento',
            footer: 'mensaje de restablecimiento de password'
          })
  
    }).catch(function(error) {
        Swal.fire({
            icon: 'error',
            title: 'error de restablecimiento',
            text: 'No se restablecio  favor de checar su correo',
            footer: 'mensaje de restablecimiento de password'
          })
  
    });
}


