function handleSession() {
    // Создадим объект для хранения сессии
    let session = new Map();
// Сохраним userAgent
    session.set("userAgent", window.navigator.userAgent);

// Запросим и сохраним возраст пользователя
    session.set("age", prompt("Пожалуйста, введите Ваш возраст"));

// Проверка возраста и сохранение сессии
    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString()
        alert('Приветствуем на LifeSpot ' + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate);
    } else {
        alert('Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены')
        window.location = 'https://www.google.com/';
    }
    return session;
}

let sessionLog = function logSession(session) {
    // Вывод в консоль
    for (let result of session) {
        console.log(result);
    }
}

function filterContent(inputParseFunction) {

    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector('.video-title').innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputParseFunction.toLowerCase())) {
            // Описание
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}