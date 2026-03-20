const el = document.querySelector("#code__html");

const code = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Главная страница</title>
  </head>
  <body>
    <!-- Мы указываем руками, что у нас есть страница /hello (example.com/hello) -->
    <!-- Если ссылка изменится, то мы получим ошибку (example.com/helloworld) -->
    <a href="{{ url_for('hello') }}">Ссылка</a>

    <!-- Flask автоматически генерирует ссылку из функции "hello" -->
    <a href="{{ url_for('hello') }}">Ссылка</a>

    <!-- Условия  -->
    <!-- if - если - абсолютно всегда один и начинает блок с условиями -->
    <!-- elif - если - может быть сколько угодно, всегда идёт после if (если есть) и продолжает блок с условиями -->
    <!-- else - иначе - всегда один, всегда идёт в конце после всех остальных условий (если есть) -->
    
    {% if hp == 100 %}
    <p>У героя фулл ХП</p>
    {% elif hp > 30 %}
    <p>Герой в порядке</p>
    {% elif hp > 0 %}
    <p>У героя лоу ХП</p>
    {% else %}
    <p>Герой побеждён</p>
    {% endif %}

    <img src="{{ url_for('static', filename='cat.jpg') }}" alt="Кот" />
    <img src="{{ url_for('static', filename='cat.jpg') }}" alt="Кот 2" />
  </body>
</html>

`;
el.textContent = code;
