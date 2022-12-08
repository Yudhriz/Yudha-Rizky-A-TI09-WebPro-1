let buttonLogin = document.getElementById("login");

buttonLogin.onclick = function(){
    let inputNama = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    let form = document.getElementById('form');

    if(inputNama == 'admin' && inputPassword == '123'){
        alert('Login Berhasil');
        form.setAttribute('action', 'dashboard.html');
    } else {
        alert('username atau password salah')
    }
    
}