const changePassBtn = document.querySelector('#submt');
const msg = document.querySelector('.msg');
const newPasswordInput = document.querySelector('#newPassword');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const eyeBtn = document.querySelector('#eye');
let state = false;


function eyeWasClicked() {
    if(state) {
        newPasswordInput.setAttribute('type', 'password');
        eyeBtn.style.color = '#7a797e';
        state = false;
    } else {
        newPasswordInput.setAttribute('type', 'text');
        eyeBtn.style.color = '#1877f2';
        state = true;
    }
}



eyeBtn.addEventListener('click', eyeWasClicked);


changePassBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const newPass = newPasswordInput.value.trim();
    const confirmPass = confirmPasswordInput.value.trim();

    if (newPass === '') {
        msg.textContent = '*Please enter a new password*';
        msg.style.color = 'red';

         // Clear input fields
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
    } else if (confirmPass === '') {
        msg.textContent = '*Please confirm your new password*';
        msg.style.color = 'red';
    } else if (newPass.length < 7) {
        msg.textContent = '*Password should be at least 7 characters long*'
        msg.style.color = 'red';

         // Clear input fields
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
    } else if (newPass !== confirmPass) {
        msg.textContent = '*Passwords do not match*';
        msg.style.color = 'red';

         // Clear input fields
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
    } else {
        msg.textContent = '*Password changed successfully*';
        msg.style.color = 'green';

        // Clear input fields
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
    }
});
