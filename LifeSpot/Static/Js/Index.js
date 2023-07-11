// Создадим объект для хранения сессии
let session = {
    'startDate': new Date().toLocaleString(),
    'userAgent': window.navigator.userAgent,
    'userAge': prompt("Пожалуйста, введите Ваш возраст")
}

//function handleSession() {
//    // Сохраним время начала сессии
//    session.set("startDate", new Date().toLocaleString());
//    // Сохраним userAgent
//    session.set("userAgent", window.navigator.userAgent);
//}

function checkAge() {
    //// Запросим и сохраним возраст пользователя
    //    session.set("age", prompt("Пожалуйста, введите Ваш возраст"));

    // Проверка возраста и сохранение сессии
    if (session.get("userAge") >= 18) {
        alert('Приветствуем на LifeSpot ' + '\n' + "Текущее время: " + new Date().toLocaleString());

    } else {
        alert('Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены')
        window.location.href = 'https://www.google.com/';
    }
}

let sessionLog = function () {
    // Вывод в консоль
    console.log('Начало сессии: ' + session.startDate)
    console.log('Данные клиента: ' + session.userAgent)
    console.log('Возраст пользователя: : ' + session.userAge)
}

function filterContent() {

    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector('.video-title').innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            // Описание
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}