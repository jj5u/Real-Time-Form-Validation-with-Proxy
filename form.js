// inputs
const form = document.getElementById('registrationForm');
const idInput = document.getElementById('idInput');
const emailInput = document.getElementById('emailInput');
const pwInput = document.getElementById('pwInput');
const repwInput = document.getElementById('repwInput');
// errors
const idError = document.getElementById('idError');
const emailError = document.getElementById('emailError');
const pwError = document.getElementById('pwError');
const repwError = document.getElementById('repwError');

const validationHandler = {
    set(target, property, value) {
        target[property] = value;
        if (property === 'id') {
            if (value.length < 3) {
                idError.textContent = 'id must be more than 3 characters';
                idError.style.display = '';
            } else {
                idError.style.display = 'none';
            }
        } else if (property === 'email') {
            const regex = /(?=.*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})([^\w\s'])/g;
            if (!regex.test(value)) {
                emailError.textContent = 'email must be in correct format';
                emailError.style.display = '';
            } else {
                emailError.style.display = 'none';
            }
        } else if (property === 'pw') {
            if (value.length < 6) {
                pwError.textContent = 'password must be more than 6 characters';
                pwError.style.display = '';
            } else {
                pwError.style.display = 'none';
            }
        } else if (property === 'repw') {
            if (value !== pwInput.value) {
                repwError.textContent = 'passwords do not match';
                repwError.style.display = '';
            } else {
                repwError.style.display = 'none';
            }
        }
    },
};

const target = {
    id: '',
    email: '',
    pw: '',
    repw: '',
};

const formValidator = new Proxy(target, validationHandler);

const formSubmitHandler = (e) => {
    e.preventDefault();
    formValidator.id = idInput.value;
    formValidator.email = emailInput.value;
    formValidator.pw = pwInput.value;
    formValidator.repw = repwInput.value;
    console.log('submit sucess');
};

form.addEventListener('submit', formSubmitHandler);
