const elAppCode = document.querySelector("#code__app-block");
const elHomeCode = document.querySelector("#code__home-block");

const blockAppCode = `#===== Сегодня можно не запоминать и не трогать =======
# Добавление нужных инструментов из библиотеки
from flask import Flask, render_template
# Создание нашего приложения
Flask app = Flask(__name__)
#==========

# ===== Наш основной блок, с которым работаем =======
# табличка с адресом нужной страницы сайта
@app.route("/")
        def home():
        return render_template("home.html", hp=75)

# табличка с адресом нужной страницы сайта
@app.route("/hello")
        def hello():
        return render_template("hello.html")
#==========

# ===== Сегодня можно не запоминать и не трогать =======
# Если запускаем наше приложение с помощью app.py - всё супер
if __name__ == "__main__":
        # Сам запуск приложения в режиме отладки (разработки)
        app.run(debug=True)
#==========
`;

const blockHomeCode = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Главная страница</title>
  </head>
  <body>
    <!-- Мы указываем руками, что у нас есть страница /hello -->
    <!-- (example.com/hello) -->
    <!-- Если ссылка изменится, то мы получим ошибку -->
    <!-- (example.com/helloworld) -->
    <a href="{{ url_for('hello') }}">Ссылка</a>

    <!-- Flask автоматически генерирует ссылку из функции "hello" -->
    <a href="{{ url_for('hello') }}">Ссылка</a>

    <!-- Условия  -->
    <!-- if - если -->
    <!-- Абсолютно всегда один -->
    <!-- Начинает блок с условиями -->


    <!-- elif - если
    <!-- Может быть в любом количестве -->
    <!-- Всегда идёт после if (если есть) и продолжает блок с условиями -->
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

elAppCode.textContent = blockAppCode;
elHomeCode.textContent = blockHomeCode;
