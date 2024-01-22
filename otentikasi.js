function validateLogin() {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'admin2024' & password === 'ananda123') {
      
        alert('Login berhasil');
        window.location.href = 'daftarbooking.html'; 
    } else {
       
        alert('Login Gagal. Periksa kembali username dan password. Masukkan Username: admin2024 Password: ananda123');
    }
}