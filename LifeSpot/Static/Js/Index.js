    let age = prompt('Пожалуйста, введите ваш возраст');
    if (age >= 18) {
    alert('Приветствуем на LifeSpot ' + new Date().toLocaleString());
} else {
    alert('Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены')
    window.location = 'https://www.google.com/';
}