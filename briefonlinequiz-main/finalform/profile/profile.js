let localuser = localStorage.getItem('username')
let localpass = localStorage.getItem('password')
let localemail = localStorage.getItem('email')

   
        
        document.getElementById("username").textContent = localuser;
        document.getElementById("email").textContent = localemail;
        document.getElementById("password").textContent = localpass;
    
        let profileButton = document.getElementById('profileButton')
        profileButton.addEventListener('click' , ()=>{
            window.location.href='/exploreCourses/brefcard-b.html'
        })
        