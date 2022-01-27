'use strict'

const getValue = (value) => {
    if (value === 'names') {
        let names = prompt('Как вас зовут?');
        while (!names) {
            names = prompt('Вы забыли указать свое имя или ввели неприемлимое значение, пожалуйста попробуйте снова');
        }
        return names;
    }

    if (value === 'surname') {
        let surname = prompt('Какая у тебя фамилия');
        while (!surname) {
            surname = prompt('Вы забыли указать свою фамилию или ввели неприемлимое значение, пожалуйста попробуйте снова');
        }
        return surname;
    }
    if (value === 'patronymic') {
        let patronymic = prompt('Какое у тебя отчество?');
        while (!patronymic) {
            patronymic = prompt('Вы забыли указать свое отчество или ввели неприемлимое значение, пожалуйста попробуйте снова');
        }
        return patronymic;
    }
    if (value === 'age') {
        let age = +prompt('Сколько тебе лет?');
        while (!age || age <= 0) {
            age = +prompt('Вы забыли указать свой возраст или ввели неприемлимое значение, пожалуйста попробуйте снова');
        }
        return age;
    }

    if (value === 'gender') {
        let gender = confirm('Ваш пол - мужской?') ? 'мужской' : 'женский'
        return gender;
    }
}
let names = getValue('names');
let surname = getValue('surname');
let patronymic = getValue('patronymic');
let age = getValue('age');
let gender = getValue('gender');

alert(` 
    Ваше ФИО: ${names} ${surname} ${patronymic} \n
    Ваш возраст в годах: ${age} \n 
    Ваш возраст в днях: ${age * 365} \n 
    Через 5 лет вам будет: ${age + 5} \n
    Ваш пол: ${gender} \n
    Вы на пенсии: ${(gender == false && age >= 55) || (gender && age >= 65) ? 'да' : 'нет'}
    `)


function getCount(str) {
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'а' || str[i] === 'е' || str[i] === 'ё' || str[i] === 'и' || str[i] === 'о' || str[i] === 'у' || str[i] === 'ы' || str[i] === 'э' || str[i] === 'ю' || str[i] === 'я') {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
alert(getCount('Спросить у пользователя строку и посчитать количество русских гласных букв, отобразить через '))


// let addMessage = document.querySelector('.message'), // добавляем эл-т
//     addButton = document.querySelector('.add'); // добавляем эл-т
// todo = document.querySelector('.todo') // добавляем эл-т

// let todoList = []; // создаем массив куда будем складывать свои данные

// if (localStorage.getItem('todo')) {
//     todoList = JSON.parse(localStorage.getItem('todo')); // если в локал.ст. есть данные под ключем todo выводим их на экран
//     if (todoList.length > 0) {
//         todoList.forEach(element => {
//             displayMessages(element.todo, element.id, element.checked)
//         });
//     }
// } // если в массиве эл-в больше чем 0, то перебираем массив и выводим список, id и checked

// addButton.addEventListener('click', function() { // вызываем обработчик события клик и функцию
//     const id = addMessage.value + Math.random(100); // создаем константу id, где добавляем дня нее уникальный идентификатор
//     let newTodo = { // создаем объект который поместим в дальнейшем в массив
//         todo: addMessage.value, // наш текст
//         checked: false, // будет ли наш checked true или false 
//         id: id, // id
//     };
//     todoList.push(newTodo); // запушиваем в тудулист массив
//     displayMessages(addMessage.value, id, false); // созд 
//     localStorage.setItem('todo', JSON.stringify(todoList)) // обновление массива в локал стор.
//     addMessage.value = ''; // обнуление инпута
// });

// function displayMessages(value, id, checked) { // создаем функцию которая принимает три аргумента

//     const li = document.createElement('li'); // создаем элемент ли
//     li.classList.add('list') // добавляем ей класс
//     const label = document.createElement('label')
//     label.classList.add('label')
//     label.innerHTML = value; // в label засунул текст value
//     label.setAttribute('for', id) // добавляем атрубут где for будет равен id
//     const button = document.createElement('button')
//         // button.innerHTML = "delete";
//     button.classList.add('button')
//     const checkbox = document.createElement('input') // создаем эл-т инпут
//     checkbox.classList.add('input')
//     checkbox.addEventListener('change', function() { // 
//         todoList = todoList.map(item => { // если id совпадает при нажатии , то мы выводим true если должно быть true и наоборот соответственно
//             if (item.id === id) {
//                 item.checked = this.checked
//             }
//             return item
//         })
//         localStorage.setItem('todo', JSON.stringify(todoList)) // записываем в локал.стор. массив
//     })
//     checkbox.setAttribute('id', id); // добвавляем id checkbox
//     checkbox.setAttribute('type', 'checkbox') // добавляем тип чекбокс для инпута
//     li.appendChild(label); // добавляем в ли лабел
//     li.appendChild(checkbox); // добавляем в ли чекбокс
//     if (checked) {
//         checkbox.checked = true;
//     } // когда запускаем сайт если есть ли, проверяем в ней чекбокс 
//     li.appendChild(button);
//     todo.appendChild(li)
//     button.addEventListener('click', function() {
//             li.remove();
//             todoList = todoList.filter(item => item.id != id)
//             localStorage.setItem('todo', JSON.stringify(todoList))
//         }) // кнопка для удаления ли с существующего туду листа

// }