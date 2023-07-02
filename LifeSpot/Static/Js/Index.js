let age = prompt('Пожалуйста, введите ваш возраст');
if (age >= 18) {
    alert('Приветствуем на LifeSpot ' + new Date().toLocaleString());
} else {
    alert('Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены')
    window.location = 'https://www.google.com/';
}

let userName = prompt('Пожалуйста, введите свое имя');
alert(`Приветствуем, ${userName}. В Вашем имени ${userName.length} символов.`);

function filterContent() {
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
       // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        let videoText = elements[i].querySelector('.video-title').innerText;
        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            // Описание
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}