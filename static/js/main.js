// Encoding: UTF-8
$(document).ready(function () {
  $('.search').on('input', toggleSearchSuggestions);
    refresh();

});

function refresh() {
  // TODO Получить новые статьи
  new_articles = [
    'Что сдавать в январе 2025 года: понятная памятка для бухгалтера',
    'Реестр субъектов малого и среднего бизнеса (МСП): что это и как в него попасть',
    'Коды заболеваний в больничном листе с расшифровкой в 2024 — 2025 году'
  ];
  new_articles.forEach((elem, index) => {
    if (index >= 1) {
    $('.new_articles').append($("<p class=\"grad_sep\"></p>"));
    }
    $('.new_articles').append($("<p class=\"article_link\"><a href=\"#\">" + elem + "</a></p>"));
  })

  // TODO Получить интересные статьи
  interesting_articles = [
    'Средний заработок при командировке',
    'План счетов бухгалтерского учета в 2024 и 2025 году',
    'Налоговая реформа в 2025 году: что изменится для бизнеса'
  ];
  interesting_articles.forEach((elem, index) => {
    if (index >= 1) {
    $('.interesting_articles').append($("<p class=\"grad_sep\"></p>"));
    }
    $('.interesting_articles').append($("<p class=\"article_link\"><a href=\"#\">" + elem + "</a></p>"));
  })

  // TODO Получить инфу для бегущей строки
}


function toggleSearchSuggestions() {
    v = $('input.search').val();
    if (v) {
        showSearchSuggestions(v);
    } else {
        hideSearchSuggestions();
    }
}

function showSearchSuggestions(text) {
    $('.suggestions').css('visibility', 'visible');
    $('.suggestions').css('width', $('.search').width());

    // TODO получить ответ на поисковой запрос
    response = [
        ['Статья', '... ' + text + ' ...', 'rgba(255, 64, 64, 0.3)'],
        ['Новость', '... ' + text + ' ...', 'rgba(64, 255, 64, 0.3)'],
        ['Тесты', '... ' + text + ' ...', 'rgba(64, 64, 255, 0.3)']
    ];

    if (!!!$('.suggestions').text()) {
        console.log(!!!$('.suggestions').text());
        $('.suggestions').append($("<ul></ul>"));
    } else {
        $('.suggestions ul li').remove();
    }
    response.forEach((elem) => {
        $('.suggestions ul').append($("<li></li>", {html: "<span style=\"background-color:" + elem[2]+ "\">" + elem[0] + "</span>" + elem[1]}));
    });

}

function hideSearchSuggestions() {
    $('.suggestions ul').remove();
    $('.suggestions').css('visibility', 'hidden');
}
