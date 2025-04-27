const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.sign-in-container form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        if (email === 'admin@gmail.com' && password === '123') {
            alert('Đăng nhập thành công!');
            window.location.href = '../admin/admin.html';
        }
		else if(email === 'test@gmail.com' && password === '123')
		{
			alert("Đăng nhập thành công!");
			window.location.href ='../home/index.html'
		} else {
            alert('Email hoặc mật khẩu không đúng!');
        }
    });
});