// file ini seperti controller penghubung antara ui html dan model user

document.addEventListener('DOMContentLoaded',  ()=> {

    //membuat tanggal yang diharapkan berformat 'yyyy-mm-dd'
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2,'0');
    const day = String(now.getDay()).padStart(2,'0');
    const taskForm = document.getElementById('taskForm')
    const taskManager = new Task();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskData = {
            taskName:document.getElementById('taskName').value,
            taskPriority:document.getElementById('taskPriority').value,
            createdAt: `${year}-${month}-${day}`,
        };
        //ini data yang dilempar dari userdata yang diketik ke fungsi saveUSer yang ada di file user
       const result = taskManager.saveTask(taskData);

       if (result.success){
        return window.location.href = '../tasks.html';
       }else {
        console.log("proses simpan data gagal")
       }
    });
});