// File: login.js

function registerAccount() {
    // Mendapatkan nilai dari elemen formulir registrasi
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validasi sederhana (Anda dapat menyesuaikan sesuai kebutuhan)
    if (fullName === "" || email === "" || password === "") {
        alert("Mohon isi semua field!");
        return;
    }

    // Proses registrasi (Anda dapat menambahkan logika backend di sini)
    // Contoh sederhana:
    console.log("Registrasi sukses!");
    console.log("Nama Lengkap: " + fullName);
    console.log("Email: " + email);

    // Reset formulir setelah registrasi
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

function loginAccount() {
    var loginEmail = document.getElementById('username').value;
    var loginPassword = document.getElementById('Password').value;

    // Add your login validation logic here
    // For simplicity, I'll use a basic example.
    if (loginEmail === 'admin123@gmail.com' && loginPassword === '123') {
        alert('Login successful!');
        // Redirect to the new page after successful login
        window.location.href = 'halaman_baru.html'; // Ganti 'halaman_baru.html' dengan nama halaman yang sesuai
    } else {
        alert('Login failed. Please check your email and password.');
    }
}
