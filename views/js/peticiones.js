document.getElementById("loginForm").addEventListener('submit', function(e) {
    //cancelar el envio automatico del fomulario
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("username:", username);
    console.log("password:", password);

    //Armar el objeto que se va a enviar al servidor
    const user = {
        username,
        password
    }

    //Hacer la peticion
    fetch('/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(respuestaDelServidor => respuestaDelServidor.json())
    .then(dataJSON => {
    //dataJSON es un json
    console.log(dataJSON)
    alert(dataJSON)
    })
    .catch(console.error())
})