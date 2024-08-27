
function Capturar() {
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;
  
    if (email === "" || senha === "") {
      alert("Digite seu usuário e senha");
      return;
    }
  
    console.log("Usuário: " + email);
    console.log("Senha: " + senha);
  
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
  
    event.preventDefault();

  }