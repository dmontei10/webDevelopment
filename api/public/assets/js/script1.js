window.onload = () => {
  const urlBase = "http://localhost:3000";

  const btnRegister = document.getElementById("btnRegister");
  const btnLogin = document.getElementById("btnLogin");
  const btnLogout = document.getElementById("btnLogout");
  const btnAuth = document.getElementById("btnAuth");
  
  // Autenticar
  btnLogin.addEventListener("click", () => {
    swal({
      title: "Acesso",
      html:
        '<input id="txtUser" class="swal2-input" placeholder="username">' +
        '<input id="txtPass" type="password" class="swal2-input" placeholder="password">',
      showCancelButton: true,
      confirmButtonText: "Validar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const user = document.getElementById("txtUser").value;
        const pass = document.getElementById("txtPass").value;
        return fetch(`${urlBase}/loginUser`, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "POST",
          body: `username=${user}&password=${pass}`,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            swal.showValidationError(`Pedido falhado: ${error}`);
          });
      },
      allowOutsideClick: () => !swal.isLoading(),
    }).then((result) => {
      swal({ title: `${result.value.message}` });
      console.log(result.value.favoritos);
      if (result.value.auth) {
        const token = result.value.token;
        localStorage.setItem("token", token);
        document.getElementById("btnLogout").style.display = "inline";
        document.getElementById("btnLogin").style.display = "none";
        document.getElementById("btnRegister").style.display = "none";
        document.getElementById("btnAuth").style.display = "none";
        
        
      }
    });
  });

  // Autenticar Admin
  btnAuth.addEventListener("click", () => {
    swal({
      title: "Acesso Reservado",
      html:
        '<input id="txtUser" class="swal2-input" placeholder="username">' +
        '<input id="txtPass" type="password" class="swal2-input" placeholder="password">',
      showCancelButton: true,
      confirmButtonText: "Validar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const user = document.getElementById("txtUser").value;
        const pass = document.getElementById("txtPass").value;
        return fetch(`${urlBase}/loginAdmin`, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "POST",
          body: `username=${user}&password=${pass}`,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            swal.showValidationError(`Pedido falhado: ${error}`);
          });
      },
      allowOutsideClick: () => !swal.isLoading(),
    }).then((result) => {
      swal({ title: `${result.value.message}` });
      console.log(result.value.favoritos);
      if (result.value.auth || result.value.admin) {
        const token = result.value.token;
        localStorage.setItem("token", token);
        document.getElementById("btnLogout").style.display = "inline";
        window.location.replace("admn.html");
        
      }
    });
  });

  // Registar
  btnRegister.addEventListener("click", () => {
    swal({
      title: "Registo",
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="nome">' +
        '<input id="swal-input2" class="swal2-input" placeholder="apelido">' +
        '<input id="swal-input3" class="swal2-input" placeholder="e-mail">' +
        '<input id="swal-input4" class="swal2-input" placeholder="username">' +
        '<input id="swal-input5" class="swal2-input" placeholder="password" type="password">',
      showCancelButton: true,
      confirmButtonText: "Registar",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const nome = document.getElementById("swal-input1").value;
        const apelido = document.getElementById("swal-input2").value;
        const email = document.getElementById("swal-input3").value;
        const username = document.getElementById("swal-input4").value;
        const password = document.getElementById("swal-input5").value;
        return fetch(`${urlBase}/registerUser`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            nome: `${nome}`,
            apelido: `${apelido}`,
            email: `${email}`,
            username: `${username}`,
            password: `${password}`,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            swal.showValidationError(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !swal.isLoading(),
    }).then((result) => {
      swal({ title: `${result.value.message}` });
    });
  });

  // Sair
  btnLogout.addEventListener("click", () => {
    const token = localStorage.token;
    if (token == undefined) {
      alert("Falta autenticação!");
      return;
    }
    return fetch(`${urlBase}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      })
      .then((result) => {
        console.log(result);
        if (!result.auth) {
          localStorage.removeItem("token");
          document.getElementById("btnLogout").style.display = "none";
          window.location.replace("index.html");
        }
      });
  });
  
  

};
