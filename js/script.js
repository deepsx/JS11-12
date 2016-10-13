$(function() {

// Инициализируем плагин, передаем количество слайдов для одновременного показа
// Карусель резиновая, так что можно передавать любое необходимое количество,
// ширина задается в процентах. Задав один слайд для показа получаем слайдер
// Максимальная и минимальная задается в CSS

  $('.jcarousel').jcarousel({showItems: 3});

// Шаблонизатор Резига

  var info = {
    name: 'Шейко Николай Дмитриевич',
    photo: 'photo.png',
    occupation: 'Фрилансер',
    question: 'Хочу учить фронтенд, потому что:',
    answers: ['Фрилансить интересно, но не всегда удается взять работу',  'Хочу саморазвиваться', 'Хочу стать частью команды'],
    phone: '+380985807693',
    socialName: 'vk.com',
    socialLink: 'http://vk.com/deepsx',
    feedback: 'Могу подобрать вам металлоискатель. Умею всего по чуть-чуть'
  };
    var html = $('#profile').html();
    var content = tmplR(html, info); // tmpl переименован в tmplR из-за конфликта имен с Lodash
    $('.template-content').append(content);

  // Шаблонизатор lodash

  var tmpl = _.template($('#profile-lodash').html());
  var html2 = tmpl(info);
  $('.template-content').append(html2);
});
