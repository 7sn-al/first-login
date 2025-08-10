document.addEventListener("DOMContentLoaded", () => {
    const logIn = document.querySelector('.login');
    const button = document.querySelector('.button1');
    const signUpLink = document.querySelector('.signup-link');

    if (!logIn || !signUpLink) {
        console.error("Missing required elements: .login or .signup-link");
        return;
    }

    signUpLink.addEventListener('click', function (event) {
        event.preventDefault();

        const isSignUpMode = signUpLink.innerText === 'SIGN UP';

        if (isSignUpMode) {

            signUpLink.innerText = 'SIGN IN';
            button.innerText='SIGN UP';
            const upup = document.querySelector('.upup');
            if (upup) upup.innerText = 'Or sign in using';

            const upup2 = document.querySelector('.upup2');
            if (upup2) upup2.innerText = 'Or sign in using';

            logIn.innerText = "Sign Up";
            logIn.style.transition = 'transform 0.6s ease';
            logIn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                logIn.style.transform = 'scale(1)';
            }, 300);

            if (!document.querySelector('.confirm-password')) {
                const confirmWrapper = document.createElement('div');
                confirmWrapper.classList.add('confirm-password');

                const label = document.createElement('label');
                label.setAttribute('for', 'confirm');
                label.innerText = "Confirm Password";

                const inputWrapper = document.createElement('div');
                inputWrapper.classList.add('input-wrapper');

                const icon = document.createElement('i');
                icon.className = 'fa-solid fa-lock';

                const input = document.createElement('input');
                input.setAttribute('id', 'confirm');
                input.setAttribute('type', 'password');
                input.setAttribute('placeholder', 'Confirm your password');

                inputWrapper.appendChild(icon);
                inputWrapper.appendChild(input);
                confirmWrapper.appendChild(label);
                confirmWrapper.appendChild(inputWrapper);

                const passwordField = document.querySelector('.password');
                if (passwordField) {
                    passwordField.insertAdjacentElement('afterend', confirmWrapper);
                }

                const forgot = document.querySelector('.forgot-text');
                if (forgot) forgot.innerText = '';

                const user1 = document.querySelector('.user1');
                const password = document.querySelector('.password');

                [user1, password, confirmWrapper].forEach(el => {
                    if (el) {
                        el.style.transition = 'transform 0.3s ease';
                        el.style.transform = 'scale(0.9)';
                        setTimeout(() => {
                            el.style.transform = 'scale(1)';
                        }, 300);
                    }
                });
            }

        } else {
            

            signUpLink.innerText = 'SIGN UP';

            const upup = document.querySelector('.upup');
            if (upup) upup.innerText = 'Or sign up using';

            const upup2 = document.querySelector('.upup2');
            if (upup2) upup2.innerText = 'Or sign up using';

            logIn.innerText = "Login";
            logIn.style.transition = 'transform 0.6s ease';
            logIn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                logIn.style.transform = 'scale(1)';
            }, 300);

            
            const confirmWrapper = document.querySelector('.confirm-password');
            if (confirmWrapper) {
                confirmWrapper.remove();
            }

           
            const forgot = document.querySelector('.forgot-text');
            if (forgot) forgot.innerText = 'Forgot password?';
                    
        }
    });
})
