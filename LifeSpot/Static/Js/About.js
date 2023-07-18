function Comment() {
    // Запросим имя
    this.author = prompt("Как вас зовут ?");
    if (this.author == null) {
        this.empty = true;
        return;
    }

    // Запросим текст
    this.text = prompt("Оставьте отзыв")
    if (this.text == null) {
        this.empty = true
        return
    }

    // Сохраним текущее время
    this.date = new Date().toLocaleString()
}

function addComment() {
    // Создадим объект
    let comment = new Comment();

    // проверяем, успешно ли юзер осуществил ввод
    if(comment.empty) {
        return;
    }
    
    // Запросим у пользователя обычный ли это текст или комментарий
    let enableLikes = confirm("Разрешить пользователям оценивать Ваш отзыв?");

    if (enableLikes) {
        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(comment);
        // Добавим ему нужное свойство
        review.rate = 0;

        // Добавляем отзыв с возможностью пользовательских оценок
        writeReview(review);
    } else {
        // Добавим простой комментарий без возможности оценки
        writeReview(comment);
    }
}

function addLike(id) {
    // Найдём нужный элемент по id
    let element = document.getElementById(id);

    // Преобразуем текст элемента в массив, разбив его по пробелам (так как счётчик лайков у нас отделен от символа ❤️пробелом)
    let array = element.innerText.split(' ')

    // Вытащим искомое значение счётчика и сразу же преобразуем его в число, так как
    // при сложении любого значения со строкой в JS будет строка, а нам этого не требуется
    let resultNum = parseInt(array[array.length - 1], 10);

    // Увеличим счётчик
    resultNum += 1

    // Сохраним измененное значение обратно в массив
    array[array.length - 1] =  `${resultNum}`

    // Обновим текст элемента
    element.innerText = array.join(' ')
}