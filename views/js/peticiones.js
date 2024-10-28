function login() {
   const username = document.getElementById("username").value;
   const password = document.getElementById("password").value;

   console.log("username:", username);
   console.log("password:", password);

   //Armar el objeto que se va a enviar al servidor
   const user = {
    username: username,
    password: password
   }

   //Hacer la peticion
   fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password}),
   })
   .then(respuestaDelServidor, () => {
    return respuestaDelServidor.json()
   })
   .then(dataJSON, () => {
    //dataJSON es un json
    console.log(dataJSON)
   })
   .catch(console.error())
}