$(document).ready(function () {
    var currentFloor = 2; // Переменная, где храниться текущий этаж
    var floorPath = $(".home-image path"); // Каждый отдельный этаэ в SVG
    var counterUp = $(".counter-up"); /* Кнопка увелечения этажа */
    var counterDown = $(".counter-Down"); /* Кнопка уменьшения этажа */

    // Функция при наведении на этаж
    floorPath.on("mouseover", function() {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
     currentFloor = $(this).attr("data-floor"); // Получаем значение текущего этажа
     $(".counter").text(currentFloor); // Записываем значение этажа в счётчик справа
    });
    // Отслеживаем клик по кнопке в вверх
    counterUp.on("click", function() { 
        // Проверяем значение этажа, оно не должно быть больше 18
        if (currentFloor < 18) {  
            currentFloor++; // Прибавляем 1 этаж
        usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); // Форматируем переменную с этажом, чтобы было 01 а не 1
        $(".counter").text(usCurrentFloor); // Записываем значение этажа в счётчик справа
        floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
        }
    });
    counterDown.on('click', function() {
        if(currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
        }
    });
});