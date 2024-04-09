// file ini seperti controller penghubung antara ui html dan model user

document.addEventListener('DOMContentLoaded',  ()=> {
    const userForm = document.getElementById('userForm')
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const userData = {
            username:document.getElementById('username').value
        };
        //ini data yang dilempar dari userdata yang diketik ke fungsi saveUSer yang ada di file user
       const result = userManager.saveUser(userData);

       if (result.success){
        return window.location.href = '../index.html';
       }else {
        console.log("proses simpan data gagal")
       }
    });
});