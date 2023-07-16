// // Создадим объект для хранения сессии
// let session = {
//     'startDate': new Date().toLocaleString(),
//     'userAgent': window.navigator.userAgent,
//     'userAge': prompt("Пожалуйста, введите Ваш возраст")
// }

function handleSession(logger, checker) {

    // Проверяем дату захода и проставляем, если новый визит
    if (window.sessionStorage.getItem("startDate") == null) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }

    // Проверяем userAgent и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAgent") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }

    // Проверяем возраст и проставляем, если новый визит
    if (window.sessionStorage.getItem("userAge") == null) {
        let input = prompt("Пожалуйста, введите ваш возраст?");
        window.sessionStorage.setItem("userAge", input)

        /* Возраст отсутствовал в sessionStorage. Значит, это первый визит пользователя, и
         при прохождении проверки на возраст он увидит приветствие*/
        checker(true)
    } else {

        /* Пользователь заходит не первый раз, приветствие не показываем. */
        checker(false)
    }

    /* Вызываем переданную в качестве колл-бэка функцию логирования.
        передавать в качестве коллбека не обязательно, можно вызвать и напрямую, но мы добавили для повторения.
    */
    logger()
}

let checker = function (newVisit) {
    if (window.sessionStorage.getItem("userAge") >= 18) {

// Добавим проверку на первое посещение
        if (newVisit) {
            alert('Приветствуем на LifeSpot ' + '\n' + "Текущее время: " + new Date().toLocaleString());
        }
    } else {
        alert('Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены')
        window.location.href = 'https://www.google.com/';
    }
}

let logger = function () {
    // Вывод в консоль
    console.log('Начало сессии: ' + window.sessionStorage.getItem('startDate'))
    console.log('Данные клиента: ' + window.sessionStorage.getItem('userAgent'))
    console.log('Возраст пользователя: : ' + window.sessionStorage.getItem('userAge'))
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