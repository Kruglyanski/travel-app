Приложение Travel App представляет собой портал с информацией о странах.
При написании Frontend использовались React, Redux, Typescript, AntDesign.
На начальной странице имеются карточки стран с фото, названием страны и названием столицы. 
Также на карточке реализована возможность выставить рейтинг в виде звёздочек, значение обрабатывается сервером и выводится среднее арифметическое от всех значений.
Чтобы выставить рейтинг необходимо зарегистрироваться и авторизоваться. 
В хедере реализованы логотип, название приложения, панель регистрации/авторизации, селект для выбора языка локализации. 
Кнопка для загрузки аватара и, если он загружен, непосредственно изображение.
На главной странице реализован поиск в соответствии с заданием.
Данные регистрации уходят на сервер и хранятся в базе данных. Данные авторизации записываются в localStorage.
Формы регистрации и входа открываются в модальном окне.
При клике на карточку страны осуществляется переход на страницу страны, где реализованы:
фото, описание, карусель фотографий интересных мест с описанием, видео с инфо о стране, интерактивная карта с отмеченной столицей.
В боко вой части страницы реализованы виджеты валюты, погоды и даты/времени.
Backend организован с помощью NodeJS, Express, MongoDb. 

Демо развернуто на сервисе Heroku:
        https://kruglyanski-travel-app.herokuapp.com/


yarn - to install<br/>
yarn dev - to run development mode