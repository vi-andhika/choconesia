function togglePw() {
    const inp = document.getElementById('pw');
    const ico = document.getElementById('eyeIco');
    if (inp.type === 'password') {
      inp.type = 'text';
      ico.className = 'ti ti-eye-off';
    } else {
      inp.type = 'password';
      ico.className = 'ti ti-eye';
    }
  }

  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Ganti bagian ini dengan logika autentikasi sesungguhnya
    alert('Login berhasil (demo)');
  });