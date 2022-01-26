let names = prompt('Какое у тебя имя?', '');
let surname = prompt('Какая у тебя фамилия?');
let patronymic = prompt('Какое у тебя отчество?');
let age = prompt('Сколько тебе лет?');
if (typeof age !== 'number') {

}
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
alert(`Ваше ФИО: ${names} ${surname} ${patronymic} \n Ваш возраст в годах: ${age} \n Ваш возраст в днях: ${age * 365} \n Ваш пол: ${gender} \n Вы на пенсии? ${pension()} `)



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