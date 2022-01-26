let names = prompt('Какое у тебя имя?', '');
if (names != null && typeof str !== "undefined") {
    str = str.trim();
}
if (!names) {
    alert('Вы забыли указать свое имя')
}
let surname = prompt('Какая у тебя фамилия?');
if (surname != null && typeof str !== "undefined") {
    str = str.trim();
}
if (!surname) {
    alert('Вы забыли указать свою фамилию')
}
let patronymic = prompt('Какое у тебя отчество?');
if (patronymic != null && typeof str !== "undefined") {
    str = str.trim();
}
if (!patronymic) {
    alert('Вы забыли указать свое отчество')
}
let age = prompt('Сколько тебе лет?');
if (typeof age !== 'number') {

}
alert('Вы не указали свой возраст')
let gender = confirm('Ваш пол - мужской?') ? 'мужской' : 'женский'
let pension = (x) => {
    if (gender === false && age > 55) {
        return 'да'
    } else if (gender === true && age > 65) {
        return 'да'
    } else {
        return 'нет'
    }
}
alert(` Ваше ФИО: ${names} ${surname} ${patronymic} \n Ваш возраст в годах: ${age} \n Ваш возраст в днях: ${age * 365} \n Ваш пол: ${gender} \n Вы на пенсии? ${pension()} `)



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


let addMessage = document.querySelector('.message'), // добавляем эл-т
    addButton = document.querySelector('.add'); // добавляем эл-т
todo = document.querySelector('.todo') // добавляем эл-т

let todoList = []; // создаем массив куда будем складывать свои данные

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo')); // если в локал.ст. есть данные под ключем todo выводим их на экран
    if (todoList.length > 0) {
        todoList.forEach(element => {
            displayMessages(element.todo, element.id, element.checked)
        });
    }
} // если в массиве эл-в больше чем 0, то перебираем массив и выводим список, id и checked

addButton.addEventListener('click', function() { // вызываем обработчик события клик и функцию
    const id = addMessage.value + Math.random(100); // создаем константу id, где добавляем дня нее уникальный идентификатор
    let newTodo = { // создаем объект который поместим в дальнейшем в массив
        todo: addMessage.value, // наш текст
        checked: false, // будет ли наш checked true или false 
        id: id, // id
    };
    todoList.push(newTodo); // запушиваем в тудулист массив
    displayMessages(addMessage.value, id, false); // созд 
    localStorage.setItem('todo', JSON.stringify(todoList)) // обновление массива в локал стор.
    addMessage.value = ''; // обнуление инпута
});

function displayMessages(value, id, checked) { // создаем функцию которая принимает три аргумента

    const li = document.createElement('li'); // создаем элемент ли
    li.classList.add('list') // добавляем ей класс
    const label = document.createElement('label')
    label.classList.add('label')
    label.innerHTML = value; // в label засунул текст value
    label.setAttribute('for', id) // добавляем атрубут где for будет равен id
    const button = document.createElement('button')
        // button.innerHTML = "delete";
    button.classList.add('button')
    const checkbox = document.createElement('input') // создаем эл-т инпут
    checkbox.classList.add('input')
    checkbox.addEventListener('change', function() { // 
        todoList = todoList.map(item => { // если id совпадает при нажатии , то мы выводим true если должно быть true и наоборот соответственно
            if (item.id === id) {
                item.checked = this.checked
            }
            return item
        })
        localStorage.setItem('todo', JSON.stringify(todoList)) // записываем в локал.стор. массив
    })
    checkbox.setAttribute('id', id); // добвавляем id checkbox
    checkbox.setAttribute('type', 'checkbox') // добавляем тип чекбокс для инпута
    li.appendChild(label); // добавляем в ли лабел
    li.appendChild(checkbox); // добавляем в ли чекбокс
    if (checked) {
        checkbox.checked = true;
    } // когда запускаем сайт если есть ли, проверяем в ней чекбокс 
    li.appendChild(button);
    todo.appendChild(li)
    button.addEventListener('click', function() {
            li.remove();
            todoList = todoList.filter(item => item.id != id)
            localStorage.setItem('todo', JSON.stringify(todoList))
        }) // кнопка для удаления ли с существующего туду листа

}