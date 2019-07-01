'use strict';
// ----------------task1---------------------------

{
    let input;
    const numbers = [];
    let total = 0;
    let counter = 0;

    do {
        input = Number(prompt('Введите число'));
        counter += 1;
        if (Number.isNaN(input) === true) {
            alert('Было введено не число, попробуйте еще раз')
        } else {
            numbers.push(input)
        }
    } while (input !== 0)
    console.log(input);

    console.log(numbers);
    let startNum = 0;

    for (let i of numbers) {
        total = startNum += i;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}
// -----------------------task2-------------------------------


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let input;

while (true) {
    input = prompt('enter password');
    if (input === null) {
        break;
    } else if (passwords.includes(input)) {
        alert('Добро пожаловать');
        break;
    } else if (attemptsLeft > 1) {
        attemptsLeft -= 1;
        alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    } else {
        alert('У вас закончились попытки, аккаунт заблокирован!');
        break;
    }
}