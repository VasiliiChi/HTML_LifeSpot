function getComment() {
    // Создадим объект
    let comment = {}

    // Сохраним свойство имени
    comment.author = prompt("Как вас зовут ?")
    if (comment.author == null) {
        return
    }

    // Сохраним текст отзыва
    comment.text = prompt("Напишите ваш отзыв")
    if (comment.text == null) {
        return
    }

    // Сохраним текущее время
    comment.date = new Date().toLocaleString()

    // Запросим у пользователя обычный ли это текст или комментарий
    let enibleLikes = confirm("Разрешить пользователям оценивать Ваш отзыв?");
    
    if (enibleLikes){
        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(comment);
        // Добавим ему нужное свойство
        review.rate = 0;

        // Добавляем отзыв с возможностью пользовательских оценок
        writeReview(review);
    }
    else {
        // Добавим простой комментарий без возможности оценки
        writeReview(comment);
    }
  
    
   
}