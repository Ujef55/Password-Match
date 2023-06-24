const changePassBtn = document.querySelector('#submt');
const msg = document.querySelector('.msg');
const newPasswordInput = document.querySelector('#newPassword');
const confirmPasswordInput = document.querySelector('#confirmPassword');

changePassBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const newPass = newPasswordInput.value.trim();
    const confirmPass = confirmPasswordInput.value.trim();

    if (newPass === '') {
        msg.textContent = '*Please enter a new password*';
        msg.style.color = 'red';
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
    } else if (confirmPass === '') {
        msg.textContent = '*Please confirm your new password*';
        msg.style.color = 'red';
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
    } else if (newPass.length < 7) {
        msg.textContent = '*Password should be at least 7 characters long*'
        msg.style.color = 'red';
        newPasswordInput.value = '';
        confirmPasswordInput.value = '';
    } else if (newPass !== confirmPass) {
        msg.textContent = '*Passwords do not match*';
        msg.style.color = 'red';
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
