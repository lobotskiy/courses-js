
// 2. Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону,
//  потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.

//     <h2 class="head">header1</h2>
//     <h2 class="head">header2 <span class="inner">inner elem1</span></h2>
//     <h2>header3</h2>
//     <h2 class="head">header4<span>inner elem2</span></h2>
//     <h2>header5</h2>

// $('h2.head').css('background', 'green').find('.inner').css('font-size', '35px');

// 3. Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, 
// щоб він став безпосередньо над <h3>.

//    <h3>header1</h3>
//    <div>text1</div>
//    <h3>header2</h3>
//    <div>text2</div>

// $('h3 + div').each(function() {
//     let elem = $(this);
//     elem.prev().before(elem);
// })


// 4. На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, 
// як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.

// let checkboxes = $(':checkbox');
// checkboxes.on('click', () => {
//     if ($(':checkbox:checked').length == 3) {
//         checkboxes.attr('disabled', 'true');
//     }
// });

