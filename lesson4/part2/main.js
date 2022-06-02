'use strict'
const btn = document.querySelector('button');
const inputName = document.querySelector(".name-input");
const inputPhone = document.querySelector(".phone-input");
const inputEmail = document.querySelector(".email-input");
btn.addEventListener('click', clickHandler);

function clickHandler(event) {
    event.preventDefault();
    inputName.classList.remove('wrong', 'correct');
    inputPhone.classList.remove('wrong', 'correct');
    inputEmail.classList.remove('wrong', 'correct');
    let alertMsg = '';


    if (!inputName.value.match(/^[a-zа-яА-ЯёЁ]+$/i)) {
        inputName.classList.add('wrong');
        alertMsg += 'Ошибка в имени!\nПоле может содержать только буквы.\n\n';
    } else {
        inputName.classList.add('correct');
    }
    if (!inputPhone.value.match(/^\+7\(\d{3}\)\d{3}-\d{4}$/)) {
        inputPhone.classList.add('wrong');
        alertMsg += 'Ошибка в телефоне!\nВведите телефон в формате +7(000)000-0000.\n\n';
    } else {
        inputPhone.classList.add('correct');
    }
    if (!inputEmail.value.match(/^(([a-z]+)|([a-z]+\.{1}[a-z]+)|([a-z]+\-{1}[a-z]+))@[a-z]{2,5}\.[a-z]{2,4}$/i)) {
        inputEmail.classList.add('wrong');
        alertMsg += 'Ошибка в электронной почте!\nВведите почту в формате mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.';
    } else {
        inputEmail.classList.add('correct');
    }

    if (alertMsg !== '') {
        alert(alertMsg);
    }
}