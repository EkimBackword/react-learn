# Начало изучения

## Введение

Перед тем, как начинать изучать любой из ныне существующих фреймфорков, таких как *React*, *Vue.js*, *Angular 4+* и так далее, нужно изучить основы *JavaScript*.
Советую для начала изучить [Современный учебник Javascript](https://learn.javascript.ru/).
После чего закрепить свои знания и освоить *ES6*. Могу посоветовать  [*Youtube*-канал CodeDojo](https://www.youtube.com/channel/UCY10FZglXJ8RL3xB04VpykQ/featured), там вы сможете найти много качественного материала, в том числе по React. Особое внимание уделите основам ES6.
> *ES* — это сокращение для *ECMAScript* (языковая стандартизация). Если говорить простыми словами *JavaScript* - язык, *ECMAScript* - стандарт для него. Это нужно знать, потому что с каждым годом стандарт изменяется, но при этом не все браузеры успевают за ним. Если этого не знать, то можно сталкнуться с тем что ваш код не будет работать в некоторых браузера. Для кого-то это может быть не важным, но лучше заранее знать, чем попасть в нелепую ситуацию.

## Настройка окружения

В рамках изучения я буду использовать компьютер, на котором установлена операционная система *Windows 10*.
Прежде, чем начать програмировать нужно убедиться, что на вашем компьютере установлена все необходимое для разработки.

- *Node.js*
- Любой текстовый редактор (Например, я буду использовать [*VS Code*](https://code.visualstudio.com/))
- Также я бы посоветовал установить *git*. (Если вы не знаете что это, то советую вам поизучать такую тему, как **Система контроля версий**)

Так же при работе с *Node.js* я бы вам посоветовал [*Node Version Manager*](https://github.com/creationix/nvm).

**Заметка:** *nvm* не поддерживает *Windows*. Но при этом есть две альтернативы:

1. [*nvm-windows*](https://github.com/coreybutler/nvm-windows)
2. [*nodist*](https://github.com/marcelklehr/nodist)

## Первое приложение на *React*

Для разработки React приложения на локальном компьютере нужно иметь не только длобальное окружение разработки, но и локльная настройка.
Разработчики позаботились о пользователях и теперь не нужно настраивать локальные сервера и сборку приложения через *Webpack*, *Gulp* или чего-то подобного.

> Можно найти такую *CLI* которая поможет вам начать писать код через считаные минуты. Они есть и для *Vue.JS* и для *Angular*, но сейчас мы рассмотрим именно для *React*

[Create React apps with no build configuration.](https://github.com/facebook/create-react-app)

### **Команды для терминала**

```bash
    npm install -g create-react-app
    create-react-app my-app
    cd my-app
```

> Забегая в будующее, для *create-react-app* есть конфигурация по сборке под TypeScript - [react-scripts-ts](https://www.npmjs.com/package/react-scripts-ts)

## Основы *React*

React достаточно прост в изучении. Обычно приложения имеют сложную структуру и требуют вспомогательные библеотеки таких как: *React Router*, *Redax* и(или) других.

> Для детального изучения основ советую ознакомиться с приведёнными ссылками ниже:

- [ReactJS DOCS](https://reactjs.org/docs/hello-world.html)
- [Краткое руководство по React JS](https://habrahabr.ru/post/248799/)
- И другой литературы. В интернете вы можете нати массу книг и статей по *React*

## *Hello World*

Наверное каждый программист начинает изучать технологию с простейшего кода:

> Вывести на экран *Hello World*

### Пример кода

```JavaScript
    import React from 'react';
    import ReactDOM from 'react-dom';

    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
    );
```

## Введение в JSX

### **JSX** - это расширение синтаксиса *JavaScript*

> Например, объявим переменную HelloWorldElement таким образом:

```JavaScript
    const HelloWorldElement = <h1>Hello, world!</h1>;
```

Переменная *HelloWorldElement* не является ни строкой, ни HTML. Данный смешеный синтаксис говорит нам о том, что мы объявили *ReactElement*. То есть, *JSX* создает «элементы» *React*.

> **Элементы** - это  деталь (маленькая часть) приложений React.

При компиляции **Элементы** в *JSX* преобразуются в вызов функции `React.createElement()`:

#### **Данный код**

```JavaScript
    const element = (
        <h1 className="greeting">
            Hello, world!
        </h1>
    );
```

#### **Переобразуется в такой**

```JavaScript
    const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
    );
```

### **JSX** - это выражение тоже

После компиляции выражения *JSX* становятся регулярными вызовами функций *JavaScript* и приравниваются к *JavaScript-объктам*. Это озночает, что *JSX* можно использовать в циклах *for* и условиях *if* и добавлять внутрь переменные.

```JavaScript
    function hi(userName) {
        if (userName) {
            return <h1>Hello, {userName}!</h1>;
        }
        return <h1>Hello, no name person.</h1>;
    }
```

> **Предупреждение**: Поскольку *JSX* ближе к *JavaScript*, чем к *HTML*, *React DOM* использует **camelCase** соглашение об именовании свойств вместо имен атрибутов *HTML*. Например, **class** становится **className** в *JSX* и **tabindex** становится **tabIndex**.

Теги *JSX* могут содержать дочерние элементы:

```JavaScript
    const element = (
        <div>
            <h1>Title</h1>
            <h2>Subtitle</h2>
        </div>
    );
```

### Предоставление элемента в *DOM*

Чтобы отрендерить (визуализировать) элемент *React* в *DOM*, нужно вызвать `ReactDOM.render()` с двумя аргументами (что отобразит и где отобразить):

```JavaScript
    const element = <h1>Hello, world</h1>;
    ReactDOM.render(element, document.getElementById('root'));
```

### Обновление элемента

*React* элементы **неизменяемы** (*immutable*). Создав элемент, вы не сможете изменить его дочерние элементы или атрибуты. Элемент можно сравнить с кадром в фильме: он представляет собой пользовательский интерфейс в определенный момент времени.

На данный момент мы знаем только один способ обновить интерфейс - это вызвать `ReactDOM.render()` с новым состоянием элемента.

```JavaScript
    function tick() {
        const MyTimer = (
            <h1> { new Date().toLocaleTimeString() }</h1>
        );
        ReactDOM.render(MyTimer, document.getElementById('root'));
    }

    setInterval(tick, 1000);
```

> **Заметка:** На практике большинство приложений React запускают `ReactDOM.render()` только один раз. Чуть позже мы разберёмся, как изменять состояние элементов.

## Компоненты и их свойства

> *Компоненты позволяют разделить пользовательский интерфейс на самостоятельные, многоразовые фрагменты и подумать о каждой части отдельно.*

### Функциональные компоненты и компоненты основанные на классах

Самый простой способ определить компонент - написать *JavaScript-функцию*:

```JavaScript
    function Hello(props) {
        return <h1>Hello, {props.name}</h1>;
    }
```

Эта функция является компонентой React, потому что она принимает на вход один аргумент *props* (который хранит в себе свойства) и возвращает *React-элемент*. Такие компоненты мы называем **«функциональными»**, потому что они буквально являются функциями *JavaScript*.

Вы также можете использовать классы ( из ES6 ) для определения компонентов:

```JavaScript
    class Hello extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
```

> Классы имеют некоторые дополнительные функции (связанные с жизненым циклом компоненты), которые мы обсудим позже.

Когда React видит элемент, представляющий пользовательский компонент, он передает атрибуты *JSX* этому компоненту как единый объект (**props**).

```JavaScript
    function Hello(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    ReactDOM.render( <Hello name="EkimBackword" />, document.getElementById('root') );
```

> **Предостережение:** Всегда начинайте имена компонентов с большой буквы. React обрабатывает компоненты, начинающиеся с строчных букв, как теги DOM.

Компоненты могут ссылаться на другие компоненты. Это позволяет использовать одну и ту же компоненту в разных местах. Например кастомная кнопка может быть элементом формы, частью списака меню или частью модального окна. Форма, модальное окно или даже таблица в приложениях React обычно выражаются как компоненты.

> Например, пост в инстаграмм: Это компонент, который содержит другие компоненты: UserInfo, Avatar, Comment и так далее.

## Состояние и жизненный цикл компоненты

> Давайте создадим компоненту часов и на основе неё изучим состояние компоненты и жизненный цикл

Функциональные компоненты, в данном случаи будет недостаточно, так как нам нужно будет следить за состоянием компоненты и иметь методы жизненого цикла. При этом компоненты на основе *ES6-классов* могут нам помочь.

Создадим основу компоненты:

```JavaScript
import React from 'react';

export default class Clock extends React.Component {
    render() {
        return (
            <h3> { new Date().toLocaleTimeString() } </h3>
        )
    }
}
```

После того, как мы запустим наше приложение, мы увидим время. Но вот не задача, время стоит на месте. Как же это можно решить?

1. Добавленим локальное состояние в класс
2. Добавленим методы жизненного цикла в класс

### Добавление локального состояния в класс

1. Добавим конструктор класса, в котором объявим наше начальное сосстояние

    ```JS
        constructor(props) {
            super(props);
            this.state = {
                now: new Date()
            };
        }
    ```

2. Заменим `new Date()` на `this.state.date` в методе `render()`

### Добавление методов жизненного цикла в класс

Для начала нам нужно будет запускать таймер всякий раз, когда `Clock` отображается в DOM в первый раз. В *React* это называется «mounting» (монтаж, установка). То есть перед тем, как повесить часы на стену нам нужно их запустить.

Потом нужно не забыть от том, что когда мы будем снимать часы со стены нам нужно остановить их, чтобы они не тратили энерги. В *React* это называется «unmounting» (убрать, размантировать).

Для этого у компонентов на осове классов есть специальные методы для запуска некоторого кода, когда компонент появляется в DOM и когда он от туда пропадает.

> `componentDidMount` / `componentWillUnmount`

```JS
    // метод изменения состояния
    tick() {
        this.setState({
          now: new Date()
        });
    }

    // метод запуска часов
    componentDidMount() {
        /*
            вы можете добавлять дополнительные поля в класс вручную, если вам нужно сохранить что-то, что не используется для визуального вывода.
        */
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    // метод остановки часов
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
```

> Теперь часы тикают каждую секунду.

### Методы жизненого цикла

1. Иницилизация компоненты

    `constructor(props) { }` - Дефолтное состояние компоненты описывается здесь.
        Например, объявляем `state`.

    `componentWillMount()` - Делаем получаем динамические данные перед тем, как строить виртуальный DOM.
        Например, запрос данных на сервер.

    `render()` - построение Virtual DOM, а его отображение в реальном DOM.

    `componentDidMount()` - Взаимодействие с компонентой после того как она была отображена.
        Например, запустить анимацию.

2. Обновление компоненты (`setState` в нашей компоненте и в родительских компонентов)

    `componentWillReceiveProps(nextProps) { }` - отрабатывает только при изменении родительского компонента.
        Можно определить какие были изменены в props, и были ли они вообще.

    `shouldComponentUpdate(nextProps, nextState)` - Ручная настройка обновления компонента (Если вернёт `true` - надо перестроить, если вернёт `false` - то перестраивать не будет).
        Используется если нужно оптимизировать обновление компоненты. (По дефолту можно наследоваться от PureComponent, в котором уже реализовано сравнение всех полей props и state).

    `componentWillUpdate(nextProps, nextState)` - Сейчас мы будем перстраивать компоненты.
        Можно сделать какие либо действия, например, запрос на сервер.

    `render()` - построение Virtual DOM, а его отображение в реальном DOM.

    `componentDidUpdate(prevProps, prevState)` - после построения реального DOM.

3. Удаление компоненты

    `componentWillUnmount()` - Оповещение о том что будет удалена компонента.
        Например, нужно подчистить *listeners*

### Правильное использование `setState()`

Есть три вещи, о которых вы должны знать:

1. Не изменять состояние напрямую, используйте для этого метод `setState()`. Единственным местом, где вы можете назначить, `this.state` является конструктор.

2. Обновления состояния могут быть асинхронными. Поскольку `this.props` и `this.state` могут быть обновлены асинхронно, вы не должны полагаться на свои значения для вычисления следующего состояния. По этому используйте вторую форму `setState()`, которая принимает функцию, а не объект. Эта функция получит `prevState` (состояние в момент изменение) в качестве первого аргумента и `props` (свойства во время обновления) в качестве второго аргумента.

    ```JS
        // Не корректно
        this.setState({
        counter: this.state.counter + this.props.increment,
        });

        // Корректно
        this.setState((prevState, props) => ({
        counter: prevState.counter + props.increment
        }));
    ```

3. Обновления состояния, объединяются автоматечески.

```JS
    constructor (props) {
        super(props);
        this.state = {
            mens: [],
            girls: []
        };
    }

    componentDidMount () {
        fetchMens()
            .then(response => { this.setState({ mens: response.mens }); });

        /*
            Изменение this.setState({girls}) оставляет this.state.mens нетронутыми, но полностью заменяет this.state.girls.
        */
        fetchGirls()
            .then(response => { this.setState({ girls: response.girls }); });
    }
```

### Потоки данных

Ни родительский, ни дочерний компоненты не могут знать, имеет ли какой-либо компонент состояние или нет, и им не важно, каким образом объявлена данная компонента как функция или класс. Поэтому состояния называют локальными, они недоступны для любого компонента, кроме того, который владеет и устанавливает их.

Компонент может передать своеё состояние вниз в качестве `props` для дочернего компонента.

```JS
 <Child anyProp={this.state.anyProp}>
```

```JS
    function Child (props) {
        return <h2>{props.anyProp}</h2>;
    }
```

Данный подход называют «однонаправленным» потоком данных (* **top-down** or **unidirectional** data flow*).

## Обработка событий

> Обработка событий элемента React очень похожа на обработку событий у элементов DOM, но существуют синтаксические различия:

- Названия событий пишуться `camelCase`, а не `lowercase`
- Функцию в JSX вы передаете как обработчик события, а не строку.

```html
    <!-- Real DOM -->
    <button onclick="activateLasers()">
    Activate Lasers
    </button>

    <!-- React Element -->
    <button onClick={activateLasers}>
    Activate Lasers
    </button>
```

В React чтобы предотвратить поведение элемента по умолчанию, вы должны явно вызвать preventDefault.

```JS
    function handleEvent (e) {
        e.preventDefault();
        console.log('handle event');
    }

    return (
        <a href="#" onClick={handleEvent}> Click me </a>
    );
```

Нужно быть осторожными с `this` при обработке событий и вызовах методов в JSX. В JavaScript методы класса не связаны по умолчанию. Если вы забудете связать `this.handleClick` и `this` и передадите его `onClick`, `this` будет `undefined` когда функция будет фактически вызвана.

Существует два варианта написания

> Первый базовый

```JS
    class SomeComponent extends React.Component {
        constructor (props) {
            super(props);
            this.state = { name: 'SomeComponent' }
            this.handleEvent = this.handleEvent.bind(this);
        }

        handleEvent () {
            e.preventDefault();
            console.log(this.state.name, 'handle event');
        }

        render () {
            return (
                <button onClick={this.handleEvent}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            );
        }
    }
```

> Второй эксперементальный (этот синтаксис включен по умолчанию при создании проекта с помощью *create-react-app*)

```JS
    class SomeComponent extends React.Component {
        constructor (props) {
            super(props);
            this.state = { name: 'SomeComponent' }
        }

        handleEvent = () => {
            e.preventDefault();
            console.log(this.state.name, 'handle event');
        }

        render () {
            return (
                <button onClick={this.handleEvent}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            );
        }
    }
```

### Передача аргументов обработчикам событий

Иногда требуется передать какие-нибудь кастомные аргументы в обработчик событий. Например, удаление элемента по `id`.

```JS
<button onClick={(e) => this.delete(id, e)}>Delete</button>
<button onClick={(...args) => this.delete(id, ...args)}>Delete</button>
<button onClick={this.delete.bind(this, id)}>Delete</button>
```

Все три записи эквивалентны.

## Условный рендеринг

Часто встречается ситуация, что в зависимости от состояния компоненты нужно отображать или скрывать какой-либо элелемент. Также вы можете использовать переменные для хранения элементов. Например:

```JS
    function LoginComponent (props) {
        return (
            <button onClick={props.onClick}> Login </button>
        );
    }

    function LogoutComponent (props) {
        return (
            <button onClick={props.onClick}> Logout </button>
        );
    }

    class LoginControl extends React.Component {
        constructor (props) {
            super(props);
            this.state = {isLoggedIn: false};
        }

        handleLoginClick = () => {
            this.setState({isLoggedIn: true});
        }

        handleLogoutClick = () => {
            this.setState({isLoggedIn: false});
        }

        render () {
            const isLoggedIn = this.state.isLoggedIn;

            let button = null;
            if (isLoggedIn) {
                button = <LogoutComponent onClick={this.handleLogoutClick} />;
            } else {
                button = <LoginComponent onClick={this.handleLoginClick} />;
            }

            return (
                <div>
                    <h1>Some Text</h1>
                    {button}
                </div>
            );
        }
    }
```

Так же можно использовать логические операторы ( `&&`, Inline If-Else `condition ? true : false`).

### Отображение списка элементов

Для отображения списка элементов, достаточно сделать массив React элементов, например:

```JS
    const numbers = [1, 2, 3, 4, 5];
    const list = numbers.map((number) =>
        <li>{number}</li>
    );

    ReactDOM.render(
        <ul>{list}</ul>,
        document.getElementById('root')
    );
```

У *React* элементов есть поле `key`, оно помогает фреймворку идентифицировать элемент. Например, если в массиве изменился элемент то *React* перерисует все элементы заново. Но если каждому элементу дать уникальный `key`, то *React* перерисует только один элемент.

```JS

    const listOne = data.map(element => <li key={element.id}> {element.text} </li> );

    const listTow = data.map(( element, index ) =>
        // Используёте index, только в том случае если нет возможности присвоить уникальный ID
        <li key={element.id}> {element.text} </li>
    );

```

## Формы

Элементы *HTML-формы* работают немного иначе, чем другие элементы *DOM* в *React*, потому что элементы *HTML-формы* по-умолчанию сохраняют некоторое внутреннее состояние. Например, эта форма допускает одно поле `name`:

```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

Но в большинстве случаев удобно иметь *JS-функцию*, которая обрабатывала отправляемую формы и имела доступ к данным, которые пользователь вводил в неё. Для достижения этого используют технологию под названием «Контролируемые компоненты» (*controlled components*).

### **Контролируемые компоненты**

Элементы *HTML-формы*, такие как `input`, `textarea` и `select` как правило, ведут свое собственное состояние и обновлять на основе пользовательского ввода. В *React* изменение состояния обычно сохраняется в свойство `state` у компоненты и обновляется только с помощью setState().

Мы можем сделать *React-состояние* «единственным источником истины». Затем заставляем *React-компонент*, который отображает форму, контролировать, каждое изменение в форме. **Контролируемым компонентом** называют, такой *React-компонент*, значения элементов формы которого контралируются *React-ом*

Что касается обработка нескольких полей формы, когда вам нужно обрабатывать такую форму, вы можете добавить атрибут `name` к каждому элементу и позволить функции обработчика выбирать, что делать, исходя из значения `event.target.name`.

```JS
    class MyForm extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                flag: true,
                count: 2
            };
        }

        handleInputChange = (event) => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            this.setState({
                [name]: value
            });
        }

        render () {
            return (
                <form>
                    <label>
                        Is going:
                        <input name="flag"
                            type="checkbox"
                            checked={this.state.flag}
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                        Number of guests:
                        <input name="count"
                            type="number"
                            value={this.state.count}
                            onChange={this.handleInputChange} />
                    </label>
                </form>
            );
        }
    }
```

### *HTML-input* с типом *file*

Данный элемент позволяет пользователю выбрать один или несколько файлов из своего хранилища для загрузки на сервер. Поскольку его значение доступно только для чтения, это **неконтролируемый компонент** в React. Возможно позже мы разберёмся с **неконтролируемыи компонентами**.

### Немного полезных советов

> **Заметка:** Вы можете передать массив в атрибут `value`, это позволит вам выбрать несколько параметров в теге `value`:

```html
<select multiple={true} value={['B', 'C']}>
```

> Если нам нужна кастомная обработка полей то это не проблема. Например, если мы хотим, чтобы эти имена записывались заглавными буквами, мы могли бы написать обработчик похожий на этот:

```JS
handleChange (event) {
  this.setState({value: event.target.value.toUpperCase()});
}
```

> В большинстве случаев разработчики *React* рекомендуют использовать контролируемые компоненты для реализации форм. В управляемом компоненте данные формы обрабатываются компонентом React. Альтернативой являются неконтролируемые компоненты, где DOM обрабатывает данные формы сам.

Чтобы написать неконтролируемый компонент, вместо написания обработчиков событий, вы можете использовать **ref** для получения значений формы из *DOM*.

В следующем примере показано, как создать ссылку на узел DOM для доступа к файлам (-ам) в обработчике отправки (Вы должны использовать [File API](https://developer.mozilla.org/ru/docs/Web/API/File/Using_files_from_web_applications) для взаимодействия с файлами):

```JS
handleSubmit (event) {
    event.preventDefault();
    alert(
        `Selected file - ${this.fileInput.files[0].name}`
    );
}

render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Upload file:
                <input type="file" ref={
                    (input) => {
                        this.fileInput = input;
                    }
                }/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
```

## Поднятие состояния (*Lifting State Up*)

При написании кода в *React* иногда получается, что состояние одной компоненты нужно использовать в другой, находящейся на одном уровне. В таком солучаем применяют подход под название *Lifting State Up* (по русски это можно перевести, как поднятие состояния).

При поднятии состояния в родительский, чтобы оба ребёнка могли его отображать и обрабатывать, значение передается в дочернии компоненты по средством `props`. Но вот не задача, `props` доступен только для чтения. В таком случае в месте со значением переменной нужно передавать и обработчик изменения значения, а в дочерние элементы уже прередовать этот обработчик по средством `props`.

```JS
convert(value, convertTo) {
    /* any convert */
    return value;
}

class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onValueChange(e.target.value);
    }

    render () {
        const value = this.props.value;
        const unit = this.props.unit;
        return (
            <fieldset>
                <legend>{unit}</legend>
                <input value={value} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Parent extends React.Component {
    constructor (props) {
        super(props);
        this.state = { rubles: 100 };
    }

    handleRublesChange = (rubles) => {
        this.setState({rubles});
    }

    handleDollarsChange = (dollars) => {
        const rubles = convert(dollars, 'toRubles');
        this.setState({rubles});
    }

    render () {
        const dollars = convert(this.state.rubles, 'toDollars');
        return (
            <div>
                <Child value={this.state.rubles}
                    unit={'rubles'}
                    onValueChange={this.handleCelsiusChange} />

                <Child value={dollars}
                    unit={'dollars'}
                    onValueChange={this.handleFahrenheitChange} />
            </div>
        );
    }
}
```

> Для любых данных, которые изменяются в *React-приложении*, должен быть один «источник истины». Обычно состояние сначала добавляется к компоненту, который ему нужен для рендеринга. Затем, если другие компоненты также нуждаются в этом, вы можете поднять его до ближайшего общего предка. Вместо того, чтобы пытаться синхронизировать состояние между различными компонентами, вы должны полагаться на поток данных сверху вниз. Подъемное состояние включает в себя написание более «шаблонного» кода, чем подходы с двусторонней привязкой, но в качестве выгоды требуется меньше усилий для поиска и изоляции ошибок. Так как любое состояние «живет» в некотором компоненте, и только этот компонент может его изменить, площадь поверхности для ошибок значительно уменьшается. Кроме того, вы можете реализовать любую пользовательскую логику для отклонения или преобразования пользовательского ввода.

## Изучение основ подошло к концу

Сейчас у нас уже есть база знаний. Теперь стоит сделать свое первое полноценное приложение на *React*.

> Переходите в следуюшую папку с проектом, где мы попробуем что-нибудь реализовать.