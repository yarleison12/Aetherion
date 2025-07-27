 function mostrarFormulario(id) {
      document.getElementById('loginForm').classList.add('d-none');
      document.getElementById('registroForm').classList.add('d-none');
      document.getElementById('recuperarForm').classList.add('d-none');
      document.getElementById(id).classList.remove('d-none');
    }

function login(e) {
  e.preventDefault();

  const usuario = document.getElementById('loginUsuario').value;
  const pass = document.getElementById('loginPassword').value;

  fetch('login.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `usuario=${encodeURIComponent(usuario)}&password=${encodeURIComponent(pass)}`
  })
  .then(res => res.json())
  .then(data => {
        console.log("Respuesta del servidor:", data);
        if (data.status === 'success') {
          Swal.fire({
            icon: 'success',
            title: '¡Bienvenido!',
            text: `Hola, ${data.nombre}!`,
            confirmButtonColor: '#8b5cf6'
          }).then(() => {
        window.location.href = 'proyecto.html';
      });
     
     } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: data.mensaje,
            confirmButtonColor: '#ef4444'
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo conectar con el servidor.',
          confirmButtonColor: '#ef4444'
        });
     });
     }


   function registrar(e) {
  e.preventDefault();
  const nombre = document.getElementById('regNombre').value;
  const telefono = document.getElementById('regTelefono').value;
  const cedula = document.getElementById('regCedula').value;
  const correo = document.getElementById('regCorreo').value;
  const usuario = document.getElementById('regUsuario').value;
  const pass = document.getElementById('regPassword').value;

  fetch('registro.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `nombre=${encodeURIComponent(nombre)}&telefono=${encodeURIComponent(telefono)}&cedula=${encodeURIComponent(cedula)}&correo=${encodeURIComponent(correo)}&usuario=${encodeURIComponent(usuario)}&password=${encodeURIComponent(pass)}`
  })
  .then(res => res.json())
  .then(data => {
    Swal.fire(data.message, '', data.status === 'success' ? 'success' : 'error');
    if (data.status === 'success') {
      mostrarFormulario('loginForm');
    }
  });
}
    
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  }

  window.onload = () => {
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  };
