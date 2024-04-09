

function doLogin () {
  var username = document.getElementById("username").value;
  var psw = document.getElementById("password").value;
  if(username == "" || psw == "") { 
       alert("username e password obbligatori");
  }
  else {

    //chiamiamo il server per effettuare la verifica 
    fetch('https://www.cacciaapi.altervista.org/login.php/loginIpad',{
      method: 'POST',// o 'GET'
      headers: {
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify({
        "username":username,
        "password":password
      })
    })
    .then(response => response.json()) // converte la risposta in JSON
    .then(data => console.log(data)) // stampai dati
    .catch((error) => {
      console.error('Errore:',error);
    });
)
